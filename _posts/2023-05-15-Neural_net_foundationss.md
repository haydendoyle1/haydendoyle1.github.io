# **[FASTAI](https://www.fast.ai/)** Neural net foundations

1. TOC
{:toc}

Here is what I learnt from [lesson 3](https://course.fast.ai/Lessons/lesson3.html) of the FastAI course. 

## What Models are Best?

In this lesson, Jeremy introduces a graph showing the metrics of different architectures. Sometimes its hard to choose a single model to start with since there are over 500 achitectures, however [this graph](https://www.kaggle.com/code/jhoward/which-image-models-are-best)[^1], shows the accuracy and speed of each of the fastai models. This useful graph is shown here:

![](/images/whichmodelsarebest.png "What Models are Best?")

## timm Models

There is a compatibale library with extra models that are compatible with fastai. This library is called timm. `timm.list_models()` will return a list of models availiable within the library. To use these models within fastai learners you need to put `' '` around the model name, as models from timm are from string. FastAI models dont need `''`. 

Although the lesson did not mention this, I found out that to use timm models, `import timm` **MUST be called before** `from fastcore.all import *`**!!!**




## 


[^1]: “Which image models are best?” https://kaggle.com/code/jhoward/which-image-models-are-best (accessed May 15, 2023).

