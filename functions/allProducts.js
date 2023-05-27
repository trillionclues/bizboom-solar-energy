const dotenv = require('dotenv');
dotenv.config();

const Airtable = require('airtable-node');

// connect to airtable
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID)
  .table(process.env.AIRTABLE_TABLE_NAME);

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 });

    // loop through the data, and create a new array
    const products = response.records.map((product) => {
      const { id, fields } = product;
      // console.log(fields);
      // get the props from field object
      const {
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        images,
        logo,
      } = fields;

      // get url of first image
      const { url } = images[0];

      // return the new array
      return {
        id,
        name,
        featured,
        price,
        colors,
        company,
        description,
        category,
        shipping,
        image: url,
        logo,
      };
    });

    // return the new array
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (err) {
    console.log(err);
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 500,
      body: 'Server Error',
    };
  }
};
