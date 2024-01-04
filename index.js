#!/usr/bin/env node

import chalk from 'chalk';
import open from 'open';

// Function to create clickable links without showing the URL
function createClickableLink(text, url) {
    return chalk.blue.underline(text);
}

console.log(`

Hi

I'm ${chalk.rgb(255, 136, 0).bold('Sonu Kumar Kushwaha')} a computer science student from India, born in Gopalganj, in the state of Bihar.

Linux System Administrator at ${createClickableLink('Wipro', 'https://singlebucks.blogspot.com/2022/06/joined-wipro-limited-as-scholar-trainee.html')} and pursuing M . Tech in Computing Systems and Infrastructure at ${createClickableLink('BITS Pilani', 'https://singlebucks.blogspot.com/2023/06/education.html')}

Completed ${createClickableLink('BCA', 'https://singlebucks.blogspot.com/2023/07/bachelors-degree-in-computer-application.html')} from Aryabhata Knowledge University Patna, showcasing a strong foundation in computer science.

I have contributed to various projects, which can be found on my ${createClickableLink('GitHub', 'https://github.com/iamsonukushwaha')} profile.

Additionally, I maintain a ${createClickableLink('personal website', 'https://singlebucks.blogspot.com')} where I share my thoughts and experiences.

I am open to new opportunities and collaborations, so don't hesitate to connect with me on ${createClickableLink('LinkedIn', 'https://www.linkedin.com/in/sonukumarkushwaha')}

That's me, today. I'll be different tomorrow, hopefully better.


Website:    ${chalk.yellow('https://singlebucks.blogspot.com')}

Twitter:    ${chalk.yellow('https://twitter.com/iamsonukushwaha')}

GitHub:     ${chalk.yellow('https://github.com/iamsonukushwaha')}

LinkedIn:   ${chalk.yellow('https://www.linkedin.com/in/sonukumarkushwaha')}




`);

// Open URLs in the default browser when clicked
open('https://singlebucks.blogspot.com/2022/06/joined-wipro-limited-as-scholar-trainee.html');
open('https://singlebucks.blogspot.com/2023/06/education.html');
open('https://singlebucks.blogspot.com/2023/07/bachelors-degree-in-computer-application.html');
open('https://github.com/iamsonukushwaha');
open('https://singlebucks.blogspot.com');
open('https://www.linkedin.com/in/sonukumarkushwaha');
