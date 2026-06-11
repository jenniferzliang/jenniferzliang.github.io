---
layout: default
nav: about
description: Jennifer Liang - Quantitative Software Engineer
---

## About

I'm a software engineer based in NYC with a background in Applied Mathematics and Computer Science from Harvard University (2023). Most recently, I worked as a quantitative software engineer at Two Sigma, where I specialized in building analytical tools with a focus on portfolio optimization and market impact modeling. I'm grateful that I got to work on some very cool projects while being surrounded by kind and brilliant colleagues. Currently, I'm taking some time off. [Follow my trip](https://www.polarsteps.com/JenniferLiang12/24514683-funemployment?s=3da47e84-36e4-4b42-bd50-eb5112d0252f&share_trip_link_variant=Control){:target="_blank"}.

### Beyond Code

Passionate reader and literacy advocate. Founded Arctic Reading Circle (2020-2024), a Canadian nonprofit organization that hosted weekly English and French read-aloud sessions and writing classes for the community.

Former competitive foil fencer, having placed in the top 4 in national tournaments and competed in the European Cadet Circuit. Recipient of the Ontario Quest for Gold athlete scholarship (2017).

Avid walker on a mission to explore <a href="#" onclick="openNycDialog(); return false;">every street in NYC</a>. I love exploring new neighborhoods and cities with my partner [Ted](https://sites.google.com/view/tedpyne/){:target="_blank"}.

### Contact

[LinkedIn](https://www.linkedin.com/in/jennifer-liang-01/){:target="_blank"} • [GitHub](https://github.com/jenniferzliang){:target="_blank"}

## Experience

### Harvard University <span class="date">2019 - 2023</span>

*Applied Mathematics and Computer Science*

#### Relevant Coursework

- **Computer Science:** Machine Learning, Algorithms and Data Structures, Functional Programming, Theoretical Computer Science
- **Mathematics:** Probability, Statistical Inference, Linear Algebra and Real Analysis, Multivariable Calculus
- **Applied Mathematics:** Big Data and Linear Algebra, Numerical Methods, Optimization

#### Mathematical Achievements

- European Girls Math Olympiad, Florence, Italy, 2018 - Bronze Medal
- Canadian Open Math Competition - Bronze Medal
- Asian Pacific Mathematics Olympiad - National Qualifier

<dialog id="nycDialog" style="max-width: 800px; padding: 0; border: none; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
    <button onclick="document.getElementById('nycDialog').close()" style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; width: 28px; height: 28px; font-size: 14px; cursor: pointer; line-height: 1;">✕</button>
    <img src="/assets/nyc.png" alt="Walking in NYC" style="width: 100%; height: auto; display: block; border-radius: 8px;">
</dialog>

<style>
    #nycDialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        overflow: visible;
    }
    #nycDialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
    }
</style>

<script>
    function openNycDialog() {
        const dialog = document.getElementById('nycDialog');
        dialog.showModal();

        dialog.addEventListener('click', function(e) {
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                               rect.left <= e.clientX && e.clientX <= rect.left + rect.width);

            if (!isInDialog) {
                dialog.close();
            }
        });
    }
</script>
