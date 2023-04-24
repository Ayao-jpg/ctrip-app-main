const fetcher = (url, options) => fetch(location.href + url, {
  method: 'GET',
  headers: {
    Authorization: 'Basic APIToken'
  },
  ...options
}).then(res => res.json());

export default fetcher;