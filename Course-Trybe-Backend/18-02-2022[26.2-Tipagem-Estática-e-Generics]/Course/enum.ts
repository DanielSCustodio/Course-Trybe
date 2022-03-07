/* enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Paused; // referenciamos um enum usando EnumName.Value
console.log(newStudentStatus); //saída: 3 */


enum StatusCodes {
  OK = 200,
  Unauthorized = 400,
  BadRequest = 400,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
const stringOk = StatusCodes[200];

console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest
console.log(stringOk);
