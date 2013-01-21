all:
	python -m markdown tndt.md -x toc > content.html
	cat pre.html content.html post.html > index.html
