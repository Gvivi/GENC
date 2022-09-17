# Day 07

## Pixels

Like the previous day, I focused on the images' color and their manipulation. The results of both days turned out to be filter-like. Preserving only a part of an image and its color, it was interesting to see how much the modified parts would still resemble the original.

### Filters

I did not have one specific artwork in mind as a reference. I think stretching out some or all colors of an image, like Kim Asendorf's work shown below, is a rather well known effect and I got inspired by the general idea of it.

![Example Image](content/day07/references/kim_asendorf.jpg)
[Artwork by Kim Asendorf (last opened 15.09.2022)](https://kimasendorf.tumblr.com/post/51826847543)

The starting x value and the y values are chosen randomly. The stripe height extends to the next random value.

{% raw %}
<iframe src="content/day07/01.1/embed.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}
[Full screen and interactive](/content/day07/01/embed.html)

The same concept, but the random y values are reselected every frame.

{% raw %}
<iframe src="content/day07/02.1/embed.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}
[Full screen and interactive](/content/day07/02/embed.html)

I decided to add noise along the stripes and the starting points.

{% raw %}
<iframe src="content/day07/03/embed.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}
[Full screen](/content/day07/03/embed.html)

I remembered some filters that used to be available in some photo editing apps. They achieved a similar look to Kelly Orth's artwork.

![Example Image](content/day07/references/kelly_orth.jpg)
[Artwork by Kelly Orth (last opened 15.09.2022)](https://pin.it/4pcsxUH)

I wanted to combine the abstraction of the previous filters and these circles. Circle diameters are randomly chosen and the underlying colors of various points are displayed as a gradient along the circle.

{% raw %}
<iframe src="content/day07/04/embed.html" width="100%" height="450" frameborder="no"></iframe>
{% endraw %}
[Full screen](/content/day07/04/embed.html)