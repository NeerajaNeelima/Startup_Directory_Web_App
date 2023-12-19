const Startup = require('../Model/startup');

const getAllDetails = async (req, res) => {
  const startups = await Startup.find();
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};
  results.totalDetails = startups.length; // Fix the typo here
  results.pageCount = Math.ceil(startups.length / limit);

  if (lastIndex < startups.length) {
    results.next = {
      page: page + 1,
    };
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    };
  }
  results.result = startups.slice(startIndex, lastIndex);
  res.json({ results });
};
const getUniqueName =async(req,res)=>{
  try {
    const startups = await Startup.find();
    res.status(200).json({ startups });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getAllDetails,getUniqueName };

/*const getAllDetails = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.status(200).json({ startups });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};*/


