import fetch from 'node-fetch';
// Recommend using node-fetch for those familiar with JS fetch

const COLORS = 'https://nt-cdn.s3.amazonaws.com/colors.json';

/**
 * @param name filter for color name
 * @param hex filter for color hex code
 * @param compName filter for complementary color name
 * @param compHex filter for complementary color hex code
 * @returns Promise
 */

//
// Generic function to fetch JSON data from a URL
// keep things separated by responsibiliy

 //using async/await for promises https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
const fetchJson = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
};

// Function to strictly search through color data based on provided criteria
const searchColors = (data, { name, hex, compName, compHex }) => {
  // function to normalize for case-insensitive, trimmed
  const normalize = str => str ? str.trim().toLowerCase() : '';

  return data.filter(color => {
    // Strict check for color name (exact match but case-insensitive)
    const matchesName = name ? normalize(color.name) === normalize(name) : true;

    // Strict check for color hex (exact match but case-insensitive)
    const matchesHex = hex ? normalize(color.hex) === normalize(hex) : true;

    // based on the tests code, seems the complementary colors check can be less strict
    // "contains" check for complementary color name | partial match, case-insensitive
    const matchesCompName = compName
        ? color.comp.some(comp => normalize(comp.name).includes(normalize(compName)))
        : true;

    // Strict check for complementary color hex | exact match, case-insensitive
    const matchesCompHex = compHex
        ? color.comp.some(comp => normalize(comp.hex) === normalize(compHex))
        : true;

    // Return true only if all checks pass
    //this way the filter function will construct a list of results that match
    return matchesName && matchesHex && matchesCompName && matchesCompHex;
  });
};


// accepts search criteria as the first parameter and URL as the second
const fetchColors = async ({ name, hex, compName, compHex }) => {
  try {
    const data = await fetchJson(COLORS); // Fetch color data using the generic fetchJson function
    if (!data) throw new Error('Failed to fetch colors data');

     // Search colors using the criteria
    return searchColors(data, {name, hex, compName, compHex});

  } catch (error) {
    console.error('Error fetching and searching colors:', error);
  }
};




// Leave this here
export default fetchColors;
