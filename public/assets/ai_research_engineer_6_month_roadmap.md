# AI Research Engineer --- 6-Month Sequence-Wise Roadmap

## North Star

**Goal:** Become a research-oriented AI/ML engineer specializing in
**LLMs, retrieval, post-training, and evaluation**, while using existing
full-stack/backend skills as an engineering advantage.

**Core loop:** Learn → Implement → Experiment → Evaluate → Read → Write

------------------------------------------------------------------------

## Phase 0 --- Setup (2--3 days)

Before starting the roadmap:

1.  Set up Python environment and Jupyter.
2.  Install NumPy, pandas, scikit-learn, matplotlib, and PyTorch.
3.  Get comfortable with Git/GitHub for experiment tracking.
4.  Create one repository for learning implementations.
5.  Create a research journal with this template:

``` text
Question:
Hypothesis:
Dataset:
Baseline:
Method:
Metrics:
Results:
Interpretation:
Failures:
Next experiment:
```

------------------------------------------------------------------------

# Month 1 --- Mathematics + Machine Learning Foundations

## Week 1 --- Linear Algebra

Learn in this order:

1.  Scalars, vectors, matrices, tensors
2.  Vector operations
3.  Dot product
4.  Matrix multiplication
5.  Transpose
6.  Norms and distances
7.  Linear transformations
8.  Orthogonality and projections
9.  Eigenvalues and eigenvectors
10. SVD --- intuition and ML applications

### Implement

-   Vector operations with NumPy
-   Matrix multiplication
-   Cosine similarity
-   Simple linear transformations

### Exit criterion

You can explain why matrix multiplication, dot products, and vector
similarity appear throughout neural networks and attention.

------------------------------------------------------------------------

## Week 2 --- Calculus + Optimization

Learn:

1.  Functions
2.  Derivatives
3.  Partial derivatives
4.  Chain rule
5.  Gradients
6.  Jacobian intuition
7.  Loss functions
8.  Gradient descent
9.  Learning rate
10. Optimization intuition

### Implement

-   Numerical derivatives
-   Gradient descent from scratch
-   Linear regression using gradient descent

### Exit criterion

You understand:

``` text
parameters
   ↓
forward pass
   ↓
loss
   ↓
gradient
   ↓
parameter update
```

------------------------------------------------------------------------

## Week 3 --- Probability + Statistics

Learn:

1.  Probability basics
2.  Conditional probability
3.  Bayes theorem
4.  Random variables
5.  Common distributions
6.  Expectation
7.  Variance
8.  Covariance
9.  Likelihood
10. Maximum likelihood estimation
11. Entropy
12. Cross-entropy
13. KL divergence
14. Sampling
15. Confidence intervals
16. Hypothesis testing

### Exit criterion

You can understand the statistical language commonly used in ML
experiments and papers.

------------------------------------------------------------------------

## Week 4 --- Classical Machine Learning

Learn in this order:

1.  Train / validation / test split
2.  Linear regression
3.  Logistic regression
4.  K-nearest neighbors
5.  Naive Bayes
6.  Decision trees
7.  Random forests
8.  K-means
9.  Bias vs variance
10. Overfitting vs underfitting
11. Regularization
12. Feature scaling
13. Evaluation metrics

Learn metrics:

-   Accuracy
-   Precision
-   Recall
-   F1
-   ROC-AUC
-   MSE / MAE

### Implement

At minimum implement from scratch:

-   Linear regression
-   Logistic regression
-   KNN
-   K-means

Then compare against scikit-learn.

### Month 1 milestone

Build a small repository:

**`ml-from-scratch`**

------------------------------------------------------------------------

# Month 2 --- Deep Learning + PyTorch

## Week 5 --- Neural Networks

Learn:

1.  Perceptron
2.  Dense layers
3.  Activation functions
4.  Sigmoid
5.  Tanh
6.  ReLU
7.  Softmax
8.  Forward propagation
9.  Loss functions
10. Backpropagation
11. Chain rule inside neural networks

### Implement

Build a tiny neural network using **NumPy only**.

Do not use PyTorch for this implementation.

------------------------------------------------------------------------

## Week 6 --- PyTorch Fundamentals

Learn:

1.  Tensors
2.  Tensor shapes
3.  Broadcasting
4.  GPU tensors
5.  Autograd
6.  `nn.Module`
7.  Parameters
8.  Loss functions
9.  Optimizers
10. Dataset
11. DataLoader

Write a training loop yourself:

``` text
for batch:
    forward
    calculate loss
    zero gradients
    backward
    optimizer step
```

Avoid hiding the training loop behind high-level frameworks initially.

------------------------------------------------------------------------

## Week 7 --- Training Neural Networks Properly

Learn:

1.  SGD
2.  Momentum
3.  Adam
4.  AdamW
5.  Learning-rate scheduling
6.  Weight initialization
7.  Regularization
8.  Dropout
9.  Batch normalization
10. Gradient clipping
11. Checkpointing
12. Mixed precision
13. Training/validation curves

### Experiment

Change one variable at a time:

-   learning rate
-   batch size
-   optimizer
-   dropout

Record how training changes.

This is your first introduction to **experimental thinking**.

------------------------------------------------------------------------

## Week 8 --- CNN Basics

Learn enough computer vision to understand deep-learning architectures:

1.  Convolution
2.  Kernels/filters
3.  Feature maps
4.  Stride
5.  Padding
6.  Pooling
7.  CNN architecture

### Project

Build an image classifier using PyTorch.

### Month 2 milestone

You should be able to open a PyTorch research repository and understand
its basic:

-   model
-   dataset
-   loss
-   optimizer
-   training loop
-   evaluation loop

------------------------------------------------------------------------

# Month 3 --- Transformers + LLM Internals

## Week 9 --- NLP + Tokenization + Embeddings

Learn:

1.  NLP basics
2.  Vocabulary
3.  Tokenization
4.  BPE
5.  Subword tokenization
6.  Token IDs
7.  Embedding matrices
8.  Positional information
9.  Cosine similarity

Understand:

``` text
Text
 ↓
Tokenizer
 ↓
Token IDs
 ↓
Embeddings
```

------------------------------------------------------------------------

## Week 10 --- Attention

Go deep here.

Learn:

1.  Query
2.  Key
3.  Value
4.  Dot-product attention
5.  Scaled dot-product attention
6.  Softmax
7.  Self-attention
8.  Causal masking
9.  Multi-head attention

Understand:

``` text
Attention(Q, K, V)
= softmax(QKᵀ / √d_k)V
```

### Implement

Implement self-attention in PyTorch yourself.

Do not start with Hugging Face.

------------------------------------------------------------------------

## Week 11 --- Transformer Architecture

Learn:

1.  Transformer blocks
2.  Multi-head attention
3.  Feed-forward networks
4.  Residual connections
5.  Layer normalization
6.  Decoder-only transformers
7.  Causal language modeling
8.  Cross-entropy loss
9.  RoPE
10. RMSNorm
11. SwiGLU
12. MQA
13. GQA
14. KV cache
15. Context windows

------------------------------------------------------------------------

## Week 12 --- Build a Mini-GPT

Build:

``` text
Dataset
 ↓
Tokenizer
 ↓
Embedding
 ↓
Transformer blocks
 ↓
Self-attention
 ↓
MLP
 ↓
LM head
 ↓
Cross-entropy
 ↓
AdamW
 ↓
Training
 ↓
Text generation
```

Track:

-   Training loss
-   Validation loss
-   Generated samples
-   Parameter count
-   Training time

### Month 3 milestone

**Project #1: Mini-GPT from scratch with PyTorch**

Write a detailed README explaining the architecture and experiments.

------------------------------------------------------------------------

# Month 4 --- Research Engineering

## Week 13 --- Learn to Read Papers

Start with approximately **one paper per week**.

For every paper record:

1.  What problem is being solved?
2.  Why does it matter?
3.  What existed previously?
4.  What is the hypothesis?
5.  What is the proposed method?
6.  What dataset is used?
7.  What are the baselines?
8.  What metrics are used?
9.  What improved?
10. What failed?
11. What are the limitations?
12. What experiment would I run next?

Suggested starting topics:

-   Attention Is All You Need
-   LoRA
-   Retrieval-Augmented Generation
-   Direct Preference Optimization

Do not try to understand every mathematical detail on the first reading.

------------------------------------------------------------------------

## Week 14 --- Experiment Design

Learn:

1.  Research questions
2.  Hypotheses
3.  Baselines
4.  Independent/dependent variables
5.  Controlled experiments
6.  Evaluation datasets
7.  Metrics
8.  Reproducibility
9.  Random seeds
10. Statistical reasoning

Use this workflow:

``` text
Question
 ↓
Hypothesis
 ↓
Baseline
 ↓
Experiment
 ↓
Evaluation
 ↓
Result
 ↓
Analysis
 ↓
Next hypothesis
```

------------------------------------------------------------------------

## Week 15 --- Ablations + Experiment Tracking

Learn:

1.  Ablation studies
2.  Hyperparameter experiments
3.  Error analysis
4.  Experiment tracking
5.  Reproducibility
6.  Comparing models fairly

Start recording:

-   configuration
-   dataset version
-   model
-   seed
-   metrics
-   runtime
-   observations

------------------------------------------------------------------------

## Week 16 --- Paper Reproduction

Choose **one manageable paper/technique**.

Good areas:

-   LoRA
-   RAG
-   retrieval
-   attention
-   fine-tuning

Steps:

1.  Read the paper.
2.  Understand the baseline.
3.  Reproduce a simplified version.
4.  Reproduce at least one important result.
5.  Change one component.
6.  Run an ablation.
7.  Document differences from the paper.

### Month 4 milestone

**Project #2: Paper reproduction**

Your repository should include:

-   paper summary
-   implementation
-   experiment configuration
-   results
-   graphs/tables
-   limitations
-   conclusions

------------------------------------------------------------------------

# Month 5 --- LLM Research Engineering

## Week 17 --- Retrieval

Go deeper than normal application-level RAG.

Learn:

1.  Document parsing
2.  Chunking
3.  Embeddings
4.  Vector indexes
5.  Dense retrieval
6.  Sparse retrieval
7.  BM25
8.  Hybrid retrieval
9.  Metadata filtering
10. Query rewriting

Learn retrieval metrics:

-   Recall@K
-   Precision@K
-   MRR
-   NDCG

------------------------------------------------------------------------

## Week 18 --- Reranking + Advanced RAG

Learn:

1.  Bi-encoder retrieval
2.  Cross-encoder reranking
3.  Hybrid retrieval
4.  Query expansion
5.  Multi-query retrieval
6.  Context construction
7.  Adaptive retrieval
8.  RAG failure modes

Experiment with:

``` text
Dense
vs
BM25
vs
Hybrid
vs
Hybrid + Reranker
```

------------------------------------------------------------------------

## Week 19 --- Fine-Tuning

Learn:

1.  Pretraining vs fine-tuning
2.  Instruction tuning
3.  Supervised fine-tuning
4.  Dataset preparation
5.  LoRA
6.  QLoRA
7.  PEFT
8.  Quantization basics
9.  Fine-tuning evaluation

Fine-tune a small open model if compute allows.

------------------------------------------------------------------------

## Week 20 --- Post-Training + LLM Evaluation

Learn:

1.  Preference data
2.  Reward models
3.  RLHF concepts
4.  PPO concepts
5.  DPO
6.  GRPO concepts
7.  Reasoning/post-training concepts

Then focus heavily on evaluation:

1.  Evaluation datasets
2.  Exact/task accuracy
3.  Faithfulness
4.  Groundedness
5.  Hallucination rate
6.  LLM-as-a-judge and its limitations
7.  Human evaluation
8.  Error categorization
9.  Cost
10. Latency

### Month 5 milestone

You should now understand the pipeline:

``` text
Data
 ↓
Model / Retrieval System
 ↓
Training or Inference
 ↓
Evaluation
 ↓
Error Analysis
 ↓
Experiment
 ↓
Improvement
```

------------------------------------------------------------------------

# Month 6 --- Flagship Research Project

Use **Pulse AI as the research laboratory** instead of building another
unrelated application.

## Week 21 --- Define the Research Question

Example:

> How do different retrieval and reranking strategies affect factuality
> and retrieval quality in a domain-specific LLM system?

Define:

-   research question
-   hypothesis
-   dataset
-   baseline
-   metrics
-   experiment matrix

Create a fixed evaluation dataset before optimizing the system.

------------------------------------------------------------------------

## Week 22 --- Retrieval Experiments

Run controlled comparisons:

### Experiment A

Dense retrieval

### Experiment B

BM25

### Experiment C

Hybrid retrieval

### Experiment D

Hybrid + reranker

Measure:

-   Recall@K
-   MRR
-   NDCG
-   answer accuracy
-   faithfulness
-   latency
-   cost

------------------------------------------------------------------------

## Week 23 --- Advanced Experiments

Choose 2--3 based on previous results:

-   adaptive top-k
-   query rewriting
-   different embedding models
-   chunking strategies
-   reranking models
-   fine-tuned model vs base model
-   context-size changes

Run ablations.

Do not change several variables simultaneously.

------------------------------------------------------------------------

## Week 24 --- Analyze + Write

Analyze:

1.  Which approach won?
2.  Why?
3.  Where did it fail?
4.  Which queries improved?
5.  Which queries became worse?
6.  What is the accuracy/latency/cost tradeoff?
7.  Does the evidence support the original hypothesis?

Write a research-style report:

1.  Abstract
2.  Introduction
3.  Problem
4.  Related Work
5.  Methodology
6.  Dataset
7.  Experimental Setup
8.  Results
9.  Ablation Studies
10. Error Analysis
11. Limitations
12. Future Work
13. Conclusion

### Month 6 milestone

**Project #3: Pulse AI Research Edition**

This becomes the flagship portfolio project.

------------------------------------------------------------------------

# Final Portfolio

Do not aim for dozens of projects.

## 1. Mini-GPT

**Signal:** Deep learning + Transformer understanding

## 2. Paper Reproduction

**Signal:** Ability to understand and reproduce research

## 3. Pulse AI Research Edition

**Signal:** Research + LLM systems + evaluation + production engineering

------------------------------------------------------------------------

# Skills to Maintain, Not Prioritize

## DSA

Do **3--4 problems per week**.

Maintain:

-   arrays/strings
-   hashing
-   binary search
-   trees
-   graphs
-   heaps
-   DP fundamentals

Do not allow DSA to consume the AI research schedule.

## System Design

Do roughly **one session per week**.

Focus especially on systems relevant to AI:

-   caching
-   queues
-   databases
-   distributed systems
-   inference systems
-   scalability

## Full Stack

Maintain existing skills.

Do not spend this period collecting more frontend/backend frameworks.

Use full-stack development mainly when it helps ship research systems or
demos.

------------------------------------------------------------------------

# Recommended Weekly Allocation

For \~25 hours/week:

  Area                         Hours
  -------------------------- -------
  ML / DL / Mathematics            6
  PyTorch / Implementation         5
  LLMs / Transformers              4
  Papers / Research                4
  Projects / Experiments           4
  DSA + System Design              2

As the months progress, move time from fundamentals toward experiments
and research.

------------------------------------------------------------------------

# Learning Rule

Use approximately:

**30% Learn → 50% Implement/Experiment → 20% Read/Write**

Do not measure progress by course completion.

Measure it by whether you can:

-   explain the idea
-   implement it
-   debug it
-   design an experiment around it
-   evaluate it
-   explain the results

------------------------------------------------------------------------

# What NOT to Focus On During These 6 Months

Avoid unnecessary detours into:

-   new JavaScript frameworks
-   endless LangChain tutorials
-   every newly released AI framework
-   advanced Kubernetes
-   deep DevOps specialization
-   broad computer-vision specialization
-   dozens of CRUD/SaaS projects
-   endlessly watching courses
-   chasing every newly released LLM

When something new appears, ask:

> **Does this materially improve my ability to become an AI Research
> Engineer?**

If not, postpone it.

------------------------------------------------------------------------

# Six-Month Sequence at a Glance

``` text
MATHEMATICS
    ↓
CLASSICAL ML
    ↓
NEURAL NETWORKS
    ↓
PYTORCH
    ↓
DEEP LEARNING
    ↓
TOKENIZATION + EMBEDDINGS
    ↓
ATTENTION
    ↓
TRANSFORMERS
    ↓
BUILD MINI-GPT
    ↓
READ RESEARCH PAPERS
    ↓
EXPERIMENT DESIGN
    ↓
ABLATIONS + EVALUATION
    ↓
REPRODUCE A PAPER
    ↓
RETRIEVAL + RAG
    ↓
RERANKING
    ↓
FINE-TUNING
    ↓
POST-TRAINING
    ↓
LLM EVALUATION
    ↓
ORIGINAL EXPERIMENTS
    ↓
PULSE AI RESEARCH EDITION
    ↓
RESEARCH REPORT
    ↓
AI RESEARCH ENGINEER PORTFOLIO
```

------------------------------------------------------------------------

# Final Success Criteria

At the end of six months, you should be able to:

-   [ ] Explain the ML mathematics behind common models.
-   [ ] Implement basic ML algorithms from scratch.
-   [ ] Implement neural networks and backpropagation.
-   [ ] Use PyTorch confidently without hiding behind high-level
    frameworks.
-   [ ] Explain attention mathematically and intuitively.
-   [ ] Implement self-attention.
-   [ ] Build and train a small Transformer.
-   [ ] Explain modern LLM architecture.
-   [ ] Read ML/LLM papers effectively.
-   [ ] Reproduce a research technique.
-   [ ] Design baselines and controlled experiments.
-   [ ] Perform ablation studies.
-   [ ] Evaluate retrieval systems quantitatively.
-   [ ] Understand fine-tuning, LoRA, and QLoRA.
-   [ ] Understand the core ideas behind RLHF, DPO, and GRPO.
-   [ ] Construct meaningful LLM evaluations.
-   [ ] Perform systematic error analysis.
-   [ ] Run original experiments on Pulse AI.
-   [ ] Write a research-style technical report.
-   [ ] Present three deep AI projects rather than many shallow
    projects.

------------------------------------------------------------------------

## North-Star Test

By the end of this roadmap, the goal is to truthfully be able to say:

> **I can read an AI research paper, understand the core idea, implement
> a simplified version, design controlled experiments, evaluate the
> results, investigate failures, and turn the successful approach into a
> working AI system.**

That is the capability this roadmap is designed to build.
