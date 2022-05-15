# lib-Markdown

The library reads files of type MD, and looks for URLs. It then tests the URLs by returning the status code of each link.

<h2>Description</h2>
<p>In the following path we will have an example md file:</p>
<hr />
<code>
File test.

Here has a url \[URLTest1\]\(http://google.com.br) <br />
Here has other url \[URLTeste2\]\(http://linux.org)

</code>
<hr />

<p>The expected result are:</p>
<hr />
<code>
Links States: [
  { URLTest1: 'http://google.com.br', status: 200 },
  { URLTeste2: 'http://linux.org', status: 200 }
]
</code>
<hr />