# **[FASTAI](https://www.fast.ai/)** Neural net foundations

1. TOC
{:toc}

Here is what I learnt from [lesson 3](https://course.fast.ai/Lessons/lesson3.html) of the FastAI course. 

## What Models are Best?

In this lesson, Jeremy introduces a graph showing the metrics of different architectures. Sometimes its hard to choose a single model to start with since there are over 500 achitectures, however [this graph](https://www.kaggle.com/code/jhoward/which-image-models-are-best)[^1], shows the accuracy and speed of each of the fastai models. This useful graph is shown here:

![](/images/whichmodelsarebest.png "What Models are Best?")

Trying different models should generally be the last thing to do when applying deep learning practically. Generally want a model that works before you tune the accuracy/speed. 

## timm Models

There is a compatibale library with extra models that are compatible with fastai. This library is called timm. `timm.list_models()` will return a list of models availiable within the library. To use these models within fastai learners you need to put `' '` around the model name, as models from timm are from string. FastAI models dont need `''`. 

Although the lesson did not mention this, I found out that to use timm models, `import timm` **MUST be called before** `from fastcore.all import *`**!!!**

## Model Layers

Jeremy then dives into what the models look like. A trained model has layers and under the layers acts like a tree, that has models, stems and stages. He uses `m.get_submodule('0.model.stem.1)` to access part of the layer.


## Handy Python Scripts

In the beginning of the demonstration of optimisation, Jeremy introduces partial functions where variables can be fixed. He also shows that `@interact` can give sliders in a notebook. 

## Gradient Descent

The lesson continues with the basic optimisation with gradient descent to visually show how a model optimises the existing model. Rectified Linear Units (ReLU) are introduced as a way to match a function as close as we want. Jeremy uses `torch.clip(y,0)` to clip anything below 0 - then uses a similar approach to make a wiggly function to match the data. From these we could create an 'accurately arbitrary precise model' - gradient descent. 

This derives deep learing!!

## Hyperparameters

In the derivation of deep learning, a small number is used as the gradient. This corresponded to the learning rate and is generally a hyperparameter of a model - i.e. a parameter you choose to pick the parameters (weights). If you choose a number too big you may diverge from the optimal solution, and if a paramter is too small it would just take forever. Thamnkfully fastai generally does this for us. 

## Neural Net in EXCEL!

Jeremy creates a Neural Net in Excel! He demonstrates that most of it is just matrix multiplication - something GPU's are especially good at as they can handle a bunch of 4x4 matrix multiplications over & over on tensor cores. He also explains a handy tip when using data that has a large range like money - use a log10 for extreme distributions. 

## NLP Introduction

The lesson then concludes with a tease at Natural Language Processing which will be part of the next lesson. NLP can be used in many ways but the example of classifying a document (any length) is used. For example, documents could be grouped by author, positive/negative sentiment, legal discovery. This classification is very similar to images and will involve HuggingFace Transformers. 

## THANK YOU




[^1]: “Which image models are best?” https://kaggle.com/code/jhoward/which-image-models-are-best (accessed May 15, 2023).

