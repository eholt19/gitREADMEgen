// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'Apache': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  };
  return badges[license] || '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Mozilla': 'https://opensource.org/licenses/MPL-2.0',
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'ISC': 'https://opensource.org/licenses/ISC'
    };
    return links[license] ? `[${license} License] (${links[license]})` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (!license) {
    return '';
    }
    return `## License ${renderLicenseBadge(license)} This project is licensed under the [${license}] (${renderLicenseLink(license)}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
    ## Description
    ${data.description}

    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}

    ## License
    ${renderLicenseSection(data.license)}
    
    ## Contributing
    ${data.contributing}
    
    ## Testing
    ${data.tests}
    
    ## Questions
    IF you have questions, feel free to contact me:
    * GitHub - [${data.link}](http://github.com/${data.link})
    * Email - ${data.email}
`;
}

export default generateMarkdown;
