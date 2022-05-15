# lib-Markdown

The library reads files of type MD, and looks for URLs. It then tests the URLs by returning the status code of each link.

<h3>Description</h3>
In the following path we will have an example md file:
<hr />
File test.

Here has a url \[URLTest1\]\(http://google.com.br) <br />
Here has other url \[URLTeste2\]\(http://linux.org)
<hr />

The expected result are:
<hr />
Links States: [
  { URLTest1: 'http://google.com.br', status: 200 },
  { URLTeste2: 'http://linux.org', status: 200 }
]
<hr />