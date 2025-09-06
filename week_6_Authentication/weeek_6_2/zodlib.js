const jwt =  require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string.min(6);


function signJwt(username, password) {
    const emailResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernamenameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username

       }, jwtPassword)
       return signature;
}

function verifyJwt(token) {

}

function decodeJwt(token) {
  // true,  false
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}
  
console.log(decodeJwt(""));
