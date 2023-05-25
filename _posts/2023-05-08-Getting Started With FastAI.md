# Getting Started With **[FASTAI](https://www.fast.ai/)**

Here is what I learnt from [lesson 1](https://course.fast.ai/Lessons/lesson1.html) of the FastAI course. 

In Deep learning you start with a random neural net, feed it examples and it learns to recognise things. The model creates the layers for itself and the deeper you get the more sophiticated the features get. Hence, there is no need to hand code the features as you may do in Machine Learning. This means that recognition we never thought was possible by machines is now easier than ever!

In this lesson, Dr Jeremy Howard demonstrates a 'simple' image based recogniser. He mentions that this recogniser doesn't have to be your general pictures, and can be applied to images of sound waveforms and mouse movements, as well as other time series data forms, to create classification models using the visual learner model. 

For the vast majority of applications, such deep learning does not need lots of data and can be applied to real world projects very simply. FastAI enables state of the art work for *FREE*. 

FastAI is build on top of pytorch, which is easier than you think since pytorch was developed to build things on top of it. Pytorch does require lots of more complex code to implement some easy things. This library reduces the amount of code required, making it easier to get started and ensures there are less things that could possibly go wrong. Pytorch dominates tensorflow in the field in machine learning, as tensorflow is becoming the minority in papers as it loses it's popularity. 

This lesson also introduces Jupyter notebooks for beginners, and demonstrates how Jupyter can even be used as a way to present slides with python cell execution during the presentation. Jupyter allows us to view data at every step along the way. 

Jeremy then goes into how the fastai library operates. Datablocks are the most important as they are the way to get all data into the model. This also helps make all the images the same size since we don't need HUGE images to train the model. Splitters are used to split the data, setting some aside for validation/testing. A learner is then used to combine the model and the data and Jeremy mentions [timm](timm.fast.ai) integrated models that can be used with fastai. Here there is lots of information about the different models accessable within the library. 






This is a loonnnng post, but this first lesson is a great introduction to Deep Learning and what it's all about!
