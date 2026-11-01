fetch('http://localhost:3000/api/books/book-9-eng/pdf', {
  headers: {
    'Range': 'bytes=0-65535'
  }
}).then(async r => {
  console.log(r.status);
  console.log(await r.text());
}).catch(console.error);
