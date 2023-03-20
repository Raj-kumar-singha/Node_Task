const url = require('url');
const os = require('os');

exports.getJsonData = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const module = parsedUrl.query.module;

  switch (module) {
    case 'cpus':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.cpus()));
      break;

    case 'networkInterfaces':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.networkInterfaces()));
      break;

    case 'platform':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.platform()));
      break;

    case 'totalmem':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.totalmem()));
      break;

    case 'freemem':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.freemem()));
      break;

    case 'loadavg':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.loadavg()));
      break;

    case 'uptime':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(os.uptime()));
      break;

    default:
      const data = {
        cpus: os.cpus(),
        platform: os.platform(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        loadAverage: os.loadavg(),
        uptime: os.uptime(),
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
      break;
  }
};
