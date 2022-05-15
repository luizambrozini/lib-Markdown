# lib-Markdown

The library reads files of type MD, and looks for URLs. It then tests the URLs by returning the status code of each link.

<h2>Description</h2>
<p>In the following path we will have an example md file:</p>
<hr />
File test.

Here has a url \[URLTest1\]\(http://google.com.br)

Here has other url \[URLTeste2\]\(http://linux.org)


<p>The expected result are:</p>
<hr />
"Links States: [
  { URLTest1: 'http://google.com.br', status: 200 },
  { URLTeste2: 'http://linux.org', status: 200 }
]"

<hr />

<h2>Dependencies:</h2>

    "chalk": "^5.0.1"
    "node-fetch": "^3.2.4"