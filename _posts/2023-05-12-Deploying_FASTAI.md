# Deploying **[FASTAI](https://www.fast.ai/)**

Here is what I learnt from [lesson 2](https://course.fast.ai/Lessons/lesson2.html) of the FastAI course. 

1. TOC
{:toc}

## Introduction

In this lesson, Dr Jeremy Howard demonstrates how a model such as the one created in lesson 1, can be implemented into a application. 

## Resizing Methods

There are several different resizing methods: `pad`, `squish`, `RandomResizeCrop`, `aug_transform`

![](/images/transformations.png "Resizing methods applied to Image")

## Confusion Matrices

The data can be visualised using confusion matrices, which only really make sense when the labels are categories. I applied this to my model from Lesson 1, and got the following results:

![](/images/confusion.png "Confusion Matrix for Animal Classifier")

## Cleaner

There is a built in cleaner within the fastai library which can be used to clean the photos that the model had trouble classifying. Generally these types of images are 'noisy' images in the dataset. The function `plot_top_losses()` tells us where the loss is the highest of the model, and in combination with the cleaner can be useful to remove/re-classify any images that should not be in the dataset. The `ImageClassifierCleaner` cleans the wrong data ordered by confidence and if you find an image that is wrong it can simply be deleted. Make sure to run the delete cell to actually remove them!!

Here are the top losses from my model in lesson 1:

![](/images/toplosses.png "Top Losses for Animal Classifier")

As you can see in this, there are some images that should not belong here. Hence the `ImageClassifierCleaner`, will be used to remove these unwanted images. 

## Deployment

After demonstrating how to use the cleaner, the lesson progresses towards using the user interface, Hugging Face Space to deploy the model. Although this lesson presented a great way to deploy a model to [Hugging Face Space](https://huggingface.co/spaces) with [Gradio](https://gradio.app/), I did not follow along and create my own application using these. However, I would like to implement a model I create into my own web-based application/site when I get more experience. This is all possible because you can save a model as a .pkl file which can easily be used without spending time training the model again!

## Notebook to Python

Jeremy also shows how to easily convert from a Jupyter notebook to a python script using a Jupyter extension. 

## Thank-you!

This lesson also briefly talks about how many epochs you should do. The answer wasn't directly given and really should be based on the percentage error you get. However, if you train the model for too long, the error rate can start to get worse...

