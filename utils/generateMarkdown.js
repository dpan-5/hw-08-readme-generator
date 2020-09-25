// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "";
  let licenseURL = "";

  switch(data.license) {
    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseURL = "https://opensource.org/licenses/MIT";
      break;
    case "GNU GPL v3":
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseURL = "https://www.gnu.org/licenses/gpl-3.0"; 
      break;
    case "ISC":
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      licenseURL = "https://opensource.org/licenses/ISC";
      break;
    case "Apache 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseURL = "https://opensource.org/licenses/Apache-2.0";
  }


  return `# ${data.title} · ${licenseBadge}

  ## Description

  ${data.description}
  
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage}
  
  ## Contributing
    
  ${data.contribution}

  ## Tests

  ${data.test}

  ## License
  
  ${data.title} is [${data.license} licensed](${licenseURL}).

  ## Questions

  Link to my [GitHub](https://github.com/${data.github})
  
  If you have additional questions, you can reach me at: ${data.email}
`;
}

module.exports = generateMarkdown;
