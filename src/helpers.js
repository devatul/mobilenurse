 export function isValidDOB (dob) {
   let pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
   return pattern.test(dob);
 }

 export function isValidPhoneNumber (ph) {
   let pattern =/^([0-9]{10})$/;
   let pattern1 =/^([0-9]{3})+[-]+([0-9]{3})+[-]+([0-9]{4})$/;
   let pattern2 =/^[(]+([0-9]{3})+[)\s]+([0-9]{3})+[-]+([0-9]{4})$/;
   return (pattern1.test(ph) || pattern2.test(ph));
 }
 
 export function isValidedPhoneNumber(ph) {
    let pattern2 =/^[(]+([0-9]{3})+[)\s]+([0-9]{3})+[-]+([0-9]{4})$/;
    return (pattern2.test(ph));
 }
