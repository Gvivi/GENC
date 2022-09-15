# Day 04

## Machines

### Scribble Machine

This is a first attempt at creating a random drawing machine. A line starts at a border and continuously connects to random points within the canvas. Once it comes close to a border it stops and a new line in a new color beginns. It stops when the HSB hues have reached an end.

{% raw %}
<iframe src="content/day04/01/embed.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

### Cardioid

The following is one approach to construct a cardioid. Another possibility is to use two circles like you can see in img 2. These circles moving around each other led to the next idea.

{% raw %}
<iframe src="content/day04/02/embed.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}

### Mandala Machine

Three randomly sized circles are moving around each other while following a circle path. Eventough their sizes are random, they are based on the size of the previous circle. Another random factor is the shape (circle, square, ellipse) and size of the displayed objects.

{% raw %}
<iframe src="content/day04/03/embed.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}