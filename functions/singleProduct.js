const dotenv = require('dotenv');
dotenv.config();

const Airtable = require('airtable-node');

// connect to airtable
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID)
  .table(process.env.AIRTABLE_TABLE_NAME);

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;

  //check if id exists
  if (id) {
    try {
      let product = await airtable.retrieve(id);

      // if product exists
      if (product.error) {
        return {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }

      // destructure the product
      product = { id: product.id, ...product.fields };
      // console.log(product);
      return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 500,
        body: `Server Error`,
      };
    }
  }
};
