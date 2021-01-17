
export function Verify(Username : string, Password : String) {

  console.log("Login Detected")

  let EncryptedUN = "Test";
  let EncryptedPW = "Test";

  if (Username == EncryptedUN && Password == EncryptedPW) {
    return true;
  } else {
    return false
  }

}

export default (Verify);