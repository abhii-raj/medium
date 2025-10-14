import { Hono } from 'hono'

import { PrismaClient } from '../generated/prisma/edge'

import { withAccelerate } from '@prisma/extension-accelerate'
import { JWTPayload } from 'hono/utils/jwt/types';
import{decode , sign , verify} from 'hono/jwt';
import { signinInput, signupInput } from '@abhii_raj/common_app';

//specify the type of  envinroment variables
const dummyprisma  =  new PrismaClient().$extends(withAccelerate()); 
type extendedPrisma = typeof  dummyprisma;


export const userRouter = new Hono<{
    Bindings:{
      DATABASE_URL: string,
      JWT_SECRET: string,
    },
    Variables:{
      prisma: extendedPrisma ,  
      jwtLoad: JWTPayload
    }
}>();




// -- global clients -- //
userRouter.use('*' , async (c , next) => {
  const prisma  = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  c.set('prisma' , prisma);

  await next();

})


// -- middleware --//





//-- routes --//
userRouter.post('/signup', async (c) => {

	const body = await c.req.json();
  const {success }= signupInput.safeParse(body);
  if(!success){
    c.status(403);
    return c.json("body not parsed  safely");
  }
	
		const user = await c.get('prisma').user.create({
			data: {
				email: body.email,
				password: body.password,
        name: body.name
			}
		});
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	
	
})

userRouter.post('/signin', async (c) => {

  const body = await  c.req.json();
  const { success } = signinInput.safeParse(body);
  if(!success){
    c.status(400);
    return c.json({error : "invalid input"})
  }
  const user =  await c.get('prisma').user.findUnique({
    where :{
      email: body.email,
      password: body.password
    }

  });

  if(!user){
    c.status(403);
    return c.json({error : "user not found"});
  }

  const token = await sign({id: user.id} , c.env.JWT_SECRET);

  return c.json({token});

})
