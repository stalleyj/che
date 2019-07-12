# Eclipse Che - Eclipse Next-Generation IDE
[![Eclipse License](https://img.shields.io/badge/license-Eclipse-brightgreen.svg)](https://github.com/codenvy/che/blob/master/LICENSE)
[![Build Status](https://ci.codenvycorp.com/buildStatus/icon?job=che-master-ci)](https://ci.codenvycorp.com/job/che-master-ci)
<a href="https://sonarcloud.io/dashboard?id=org.eclipse.che%3Ache-parent%3Amaster">
<img src="https://sonarcloud.io/images/project_badges/sonarcloud-black.svg" width="94" height="20" href="" />
</a>


https://www.eclipse.org/che/. Next-generation container development platform, developer workspace server and cloud IDE. Che is Kubernetes-native and places everything the developer needs into containers in Kube pods including dependencies, embedded containerized runtimes, a web IDE, and project code. This makes workspaces distributed, collaborative, and portable to run anywhere Kubernetes runs ... [Read More](https://www.eclipse.org/che/features/)

![Eclipse Che](https://www.eclipse.org/che/images/hero-technology-v2@2x.png "Eclipse Che")

### Getting Started
You can run Che wherever Kubernetes runs - in the public cloud, a private cloud, or install it locally. The [step by step guide](https://eclipse.org/che/getting-started/) will get you going along with [our docs](https://www.eclipse.org/che/docs/).


### Customizing
Customizing Che could be done in several ways:

1. **Customize the dashboard for your team to start coding on your projects.**

   Developers would access to the dashboard with your own devfiles to create on demand workspaces. Each devfile could have a deep level of customization:
    - Import any git projects
    - Use plugins that you have coded or the ones available from the Che plugin registry or VSCode market place or your own hosted plugin registry.
    - Include your build time or runtime containers, your kube native applications.
    - Make available customized commands to build and run your projects.
2. **Customize your own Che-theia editor with your own set of build in plugins and make it the default editor of your Che deployment.**
3. **Customize and run your own editor instead of Che-Theia.**


### Contributing
New contributors, the labels [good first issue](https://github.com/eclipse/che/labels/good%20first%20issue)
and [help wanted](https://github.com/eclipse/che/labels/help%20wanted) are for issues and pull request that new contributors can start with. They will appear in the https://github.com/eclipse/che/contribute page.

If you are interested in fixing issues and contributing directly to the code base, please see [How to Contribute](https://github.com/eclipse/che/wiki/How-To-Contribute). It covers:
- [Submitting bugs](https://github.com/eclipse/che/wiki/Submitting-Bugs-and-Suggestions)
- [Development workflow](https://github.com/eclipse/che/wiki/Development-Workflow)
- [Coding guidelines](https://github.com/eclipse/che/wiki/Coding-Guidelines)
- [Contributor license agreement](https://github.com/eclipse/che/wiki/Eclipse-Contributor-Agreement)

The `che` repository is where we do development and there are many ways you can participate, for example:

- [Submit bugs and feature requests](https://github.com/eclipse/che/issues) and help us verify them
- Review [source code changes](https://github.com/eclipse/che/pulls)
- [Improve docs](https://github.com/eclipse/che-docs)


### Ecosystem
The next generation of Eclipse Che is going to be built from multiple components and plugins (learn more in [the roadmap](https://github.com/eclipse/che/wiki/Roadmap) on the wiki). This list provides links to those components and technologies underneath Che.

| Project        | Description  |
| ----------- |-----|
| [Che-Theia](https://github.com/eclipse/che-theia) | Theia IDE integrated in Che.  |
| [chectl](https://github.com/che-incubator/chectl) | The CLI to install Che, create and start workspaces and devfiles |
| [Devfile](https://redhat-developer.github.io/devfile/) | The way to do DWaC (Developer Workspace as Code) |
| [Kubernetes]() | Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications. |


### Feedback
* **Support:** You can ask questions, report bugs, and request features using [GitHub issues](https://github.com/eclipse/che/issues).
* **Public Chat:** Join the public [eclipse-che](https://mattermost.eclipse.org/eclipse/channels/eclipse-che) Mattermost channel to discuss with community and contributors.
* **Roadmap:** We maintain [the roadmap](https://github.com/eclipse/che/wiki/Roadmap) on the wiki. 
* **Weekly Meetings:** Join us in our [Che community meeting](https://github.com/eclipse/che/wiki/Che-Dev-Meetings) every second monday.

### License
Che is open sourced under the Eclipse Public License 2.0.

### Roadmap and Community Meetings
We publish the [Che roadmap](https://github.com/eclipse/che/wiki/Roadmap) in the open and welcome anyone to join our [community meetings](https://github.com/eclipse/che/wiki/Che-Dev-Meetings). We love to hear from users and developers!
