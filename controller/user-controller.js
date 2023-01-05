import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
    try {

        const user=request.body;
      const newUser= new User (user);
      await newUser.save();

      response.status(200).json({message:user})
    } catch (error) {
        response.status(500).json({message:error.message})
    }
}

export const userLogin=async (req,res) =>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        let user =await User.findOne({email:email,password:password});
        if(user){
            return res.status(200).json({data:user});
        }
        else{
            return res.status(401).json('Invalid Login')
        }
    }
    catch(error){
        res.status(500).json("Error",error.message)
    }
}