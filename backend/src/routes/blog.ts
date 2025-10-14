import { Hono } from 'hono'

// 3.2sec  -> 146ms 

import{decode , sign , verify} from 'hono/jwt';
import { Post, PrismaClient } from '../generated/prisma/edge'

import { withAccelerate } from '@prisma/extension-accelerate'
import { createPostInput } from '@abhii_raj/common_app';

//specify the type of  envinroment variables
const dummyprisma  =  new PrismaClient().$extends(withAccelerate()); 
type extendedPrisma = typeof  dummyprisma;


export const blogRouter = new Hono<{
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string,
    },
      Variables:{
        prisma: extendedPrisma ,  
        jwtLoad: string,
      }
}>();

blogRouter.use('*' , async (c , next) => {

    const authHeader = c.req.header('Authorization');

    if(!authHeader || !authHeader.startsWith('Bearer ')){
       c.status(403);
       c.json({'eroor' : 'Invalid or expired token'})
    }

    const token  = authHeader?.split(" ")[1];
    if(!token){
      return c.json({"error" : "token not found"});
    }
    const payload = await verify(token , c.env.JWT_SECRET);
    if(payload.id !== null){
      c.set('jwtLoad' , payload.id as string);
    }else{
      c.status(403);
      return c.json({"error" : "user id not found"})
    }

    await next();
})


// TODO  : pagination 

blogRouter.get('/bulk', async  (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try{
    const posts = await prisma.post.findMany({
      select:{
        content : true,
        title : true,
        id : true,
        author :{
          select :{
            name: true,
          }
        }
      }
    });
    const cnt = await prisma.post.count();


    return c.json(posts);
  }catch{
    c.status(403);
    return c.json({"error" : "unable to fetch all posts"})
  }
  
})


blogRouter.post('/', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = createPostInput.safeParse(body);
  if(!success){
    c.status(403);
    return c.json(" created a blog post ");
  }
  
  const blog = await  prisma.post.create({
    data : {
      title : body.title,
      content: body.content,
      authorId: c.get('jwtLoad')
    }
  });

  return c.json({
    id: blog.id
  })

})

blogRouter.put('/',async (c) => {
  const userId = c.get('jwtLoad');

    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json();
  
  const { success } = createPostInput.safeParse(body);
  if(!success){
    c.status(403);
    return c.json(" created a blog post ");
  }
  
  const post = prisma.post.update({
    where : {
      id : body.id,
      authorId : userId
    },
    data :{
      content : body.content,
      title : body.title
    }
  });
  return c.text('updated post ');

})

blogRouter.get('/:id', async (c) => {
  const postId = c.req.param('id');

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try{
    const post = await prisma.post.findFirst({
      where : {
        id : postId
      },
      select :{
        content : true,
        title : true,
        id : true,
        author :{
          select :{
            name: true,
          }
        }
      }
    })

    return c.json(post)
  }catch{
    c.status(403);
    return c.json({"error" : "post not found"});
  }


})








export default blogRouter
