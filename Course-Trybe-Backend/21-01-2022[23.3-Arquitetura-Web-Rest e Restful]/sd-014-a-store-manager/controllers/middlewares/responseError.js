const responseAarray = [
  {
    status: 400,
    message: '"name" is required',          
  },

  {
    status: 422,
    message: '"name" length must be at least 5 characters long',          
  },

  {
    status: 409,
    message: '"Product already exists"',          
  },

  {
    status: 400,
    message: '"quantity" is required"',          
  },

  {
    status: 422,
    message: '"quantity" must be a number larger than or equal to 1"',          
  },
];

const sendResponse = async (response) => {
  const result = await responseAarray.find((r) => r.message.includes(response));
  console.log(result);
  return { status: result.status, message: result.message };
};

module.exports = {
  sendResponse,
};