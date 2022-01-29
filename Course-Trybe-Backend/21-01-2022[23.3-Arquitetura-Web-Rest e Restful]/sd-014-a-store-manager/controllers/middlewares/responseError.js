const responseAarray = [
  {
    status: 400,
    messageJoi: '"name" is required',     
    message: '"name" is required',
  },

  {
    status: 422,
    messageJoi: '"name" length must be at least 5 characters long',     
    message: '"name" length must be at least 5 characters long',      
  },

  {
    status: 409,
    messageJoi: '"Product already exists"',          
    message: '"Product already exists"',          
  },

  {
    status: 400,
    messageJoi: '"quantity" is required',          
    message: '"quantity" is required',          
  },

  {
    status: 422,
    messageJoi: '"quantity" must be larger than or equal to 1',   
    message: '"quantity" must be a number larger than or equal to 1',             
  },

  {
    status: 422,
    messageJoi: '"quantity" must be a number',      
    message: '"quantity" must be a number larger than or equal to 1',          
  },
];

const sendResponse = async (response) => {
  const result = await responseAarray.find((r) => r.messageJoi === response);
  return { status: result.status, message: result.message };
};

module.exports = {
  sendResponse,
};