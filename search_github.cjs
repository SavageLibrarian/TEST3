const https = require('https');

function searchGithub() {
  const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/search/repositories?q=citylib',
    method: 'GET',
    headers: {
      'User-Agent': 'NodeJS-Agent'
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        if (json.items) {
          json.items.forEach(item => {
            console.log(`Name: ${item.name}`);
            console.log(`URL: ${item.html_url}`);
            console.log(`Description: ${item.description}`);
            console.log('---');
          });
        } else {
          console.log('No repositories found or rate limit hit:', json);
        }
      } catch (err) {
        console.error('Error parsing JSON:', err);
      }
    });
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });
  req.end();
}

searchGithub();
