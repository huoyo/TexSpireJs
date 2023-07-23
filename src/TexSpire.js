function TexSpire(divId,isInit) {
    this.back = document.querySelector(`#${divId}`);
    this.back.className = 'page-container';
    this.pageDoms = [];
    this.playPageNum = -1;
    if (isInit) {
        this.back.innerHTML = '';
    }
    this.themes = {
        '@theme': {
            'titleColor': '#0e13ab',
            'subTitleColor': 'lightslategray',
            'background': '#f2f3f2',
            'background-direction': 'td',
            '@image': {
                'title-font-size': '16px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@quote': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'linear-gradient(to right, #ecf6ec,white)',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@label': {
                'font-size': '20px',
                'font-color': '#01000c',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@text': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@chart': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@list': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@table': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '18px',
                'font-color': '#666',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'in-border': '#d7ebe2',
                'title-background': '#46C276BF',
                'vague': '0',
            }
        },
        '@magictheme': {
            'titleColor': '#0e13ab',
            'subTitleColor': '#020c17',
            'background': 'linear-gradient(rgb(64, 78, 234), rgb(243 193 179))',
            '@image': {
                'title-font-size': '16px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@quote': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'linear-gradient(to right, #ecf6ec,white)',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@label': {
                'font-size': '20px',
                'font-color': '#01000c',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@text': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '10px',
            },
            '@chart': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'out-border': '#38f39f',
                'vague': '10px',
            },
            '@list': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'out-border': '#38f39f',
                'vague': '10px',
            },
            '@table': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '18px',
                'font-color': '#666',
                'background': 'white',
                'out-border': '#38f39f',
                'in-border': '#dedfeabf',
                'title-background': '#06081fbf',
                'vague': '10px',
            },
        },
        '@darktheme': {
            'titleColor': '#e9eaf1',
            'subTitleColor': '#fafdfdcc',
            'background': 'linear-gradient(#11132b, hsl(244deg 14% 21%))',
            '@image': {
                'title-font-size': '16px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@quote': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'linear-gradient(to right, #ecf6ec,white)',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@label': {
                'font-size': '20px',
                'font-color': '#01000c',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@text': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '10px',
            },
            '@chart': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'out-border': '#38f39f',
                'vague': '10px',
            },
            '@list': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'out-border': '#38f39f',
                'vague': '10px',
            },
            '@table': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '18px',
                'font-color': '#666',
                'background': 'white',
                'out-border': '#38f39f',
                'in-border': '#dedfeabf',
                'title-background': '#06081fbf',
                'vague': '10px',
            },
        },
        '@freshtheme': {
            'titleColor': '#0e13ab',
            'subTitleColor': 'lightslategray',
            'background': 'linear-gradient(#f6f7f7, hsl(172deg 84% 70%))',
            'background-direction': 'td',
            '@image': {
                'title-font-size': '16px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@quote': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'linear-gradient(to right, #ecf6ec,white)',
                'background-direction': 'td',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@label': {
                'font-size': '20px',
                'font-color': '#01000c',
                'out-border': '#38f39f',
                'vague': '0',
            },
            '@text': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'out-border': '#38f39f',
                'vague': '15px',
            },
            '@chart': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'out-border': '#38f39f',
                'vague': '15px',
            },
            '@list': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '20px',
                'font-color': '#01000c',
                'background': 'white',
                'out-border': '#38f39f',
                'vague': '15px',
            },
            '@table': {
                'title-font-size': '30px',
                'title-font-color': '#02032c',
                'font-size': '18px',
                'font-color': '#666',
                'background': 'white',
                'out-border': '#38f39f',
                'in-border': '#dedfeabf',
                'title-background': '#3c4af5bf',
                'vague': '15px',
            }
        }
    };
    this.colors = [
        '#029a5c',
        '#21b71b',
        '#30213d',
        '#16162d',
        '#373F5E',
        '#0c7048',
        '#1aba73',
        '#20dccd',
        '#8002ef',
        '#1f9196',
        '#0c36e1',
        '#3b4d96',
        '#323cde',
        '#a830c2',
        '#0b0e54'];
    this.lastRandomColor = '';
    this.pagesThemeName = {};
    this.codeParser = new CodeParser();
    this.back.ondblclick = function (e) {
        if (e.target.className.indexOf('page-') != -1) {
            if (e.clientX < 300) {
                previous();
            } else {
                next();
            }
        }
    }
    this.back.onclick = function (e) {
        if (initNavMenuFlag) {
            hideNavMenu();
        }
        initNavMenuFlag = false;
    }
    this.back.onmousemove = function (e) {
        var innerHeight = window.innerHeight;
        var innerWidth = window.innerWidth;
        if (e.clientX > (innerWidth - 33) && showNavMenuFlag) {
            showNavMenu();
        } else if (e.clientX < (innerWidth - 200 - 33) && !staticNavMenuFlag && !initNavMenuFlag) {
            hideNavMenu();
        }
        if (e.clientX < 15 && e.clientY < (innerHeight - 300) && showNavMenuFlag) {
            document.querySelector(".pageMenu").style.display = 'block'
        } else if (e.clientX > 200) {
            document.querySelector(".pageMenu").style.display = 'none';
        }
    }
    let menu = document.createElement("div");
    menu.className = 'pageMenu';
    menu.innerHTML = '<li onclick="next();">下一页</li>\n' +
        '        <li onclick="previous()">上一页</li>\n' +
        '        <li onclick="fullPage()">进入全屏</li>\n' +
        '        <li onclick="exitPage()">退出全屏</li>\n';
    this.back.appendChild(menu);
    let navMenu = document.createElement("ul");
    navMenu.className = 'navMenu';
    let li = document.createElement("li");
    li.innerHTML = '目录';
    li.style.fontWeight = 'bolder'
    li.style.fontSize = '20px'
    li.style.backgroundColor = '#3a50de'
    li.style.color = 'cornsilk'
    navMenu.appendChild(li)
    this.back.appendChild(navMenu);
}

function showNavMenu() {
    let navMenu = document.querySelector(".navMenu");
    navMenu.style.display = 'block';
}

function hideNavMenu() {
    let navMenu = document.querySelector(".navMenu");
    navMenu.style.display = 'none';
}

let showNavMenuFlag = true;
TexSpire.prototype.setShowNavMenu = function (flag) {
    showNavMenuFlag = flag;
}

let staticNavMenuFlag = false;
TexSpire.prototype.setStaticNavMenu = function (flag) {
    staticNavMenuFlag = flag;
    if (flag) {
        showNavMenu();
    }else {
        hideNavMenu();
    }
}

let initNavMenuFlag = false;
TexSpire.prototype.setInitNavMenu = function (flag) {
    initNavMenuFlag = flag;
    if (flag) {
        showNavMenu();
    }
}

TexSpire.prototype.hideTitles = function () {
    let titlesDom = document.querySelectorAll(".page-title");
    for (let i = 0; i < titlesDom.length; i++) {
        titlesDom[i].style.display = 'none';
    }
}

TexSpire.prototype.hideTitle = function (pageNum) {
    let titleDom = document.querySelector(`#page-title-div-${pageNum}`);
    if (titleDom) {
        titleDom.style.display = 'none';
    }
}
TexSpire.prototype.showTitle = function (pageNum) {
    let titleDom = document.querySelector(`#page-title-div-${pageNum}`);
    if (titleDom) {
        titleDom.style.display = 'flex';
    }
}

TexSpire.prototype.createMobileMenu = function () {
    let qcodeDiv = document.createElement("div");
    qcodeDiv.className = 'ts-mobile-menu';
    qcodeDiv.innerHTML = `<div class="ts-mobile-menu-item" onclick="previous();">上一页</div>
                        <div class="ts-mobile-menu-item" onclick="next();">下一页</div>
                        <div class="ts-mobile-menu-item" style="right: 20px;position: absolute" onclick="showNavMenu();">☷</div>`;
    this.back.appendChild(qcodeDiv);
}

TexSpire.prototype.createQcode = function () {
    let qcodeDiv = document.createElement("div");
    qcodeDiv.className = 'ts-qcode';
    let qcodeUrl = `${window.location.protocol}//${window.location.host}/qcode/create?content=${window.location.pathname.substring(6)}&type=projectLink`;
    qcodeDiv.innerHTML = `<img class="ts-qcode-img" style="display: block;position:relative;width: 100%;z-index: 11" src="${qcodeUrl}"/>`;
    this.back.appendChild(qcodeDiv);
}

TexSpire.prototype.addNavMenu = function (linkPageNum,text,) {
    let navMenu = document.querySelector(".navMenu");
    let li = document.createElement("li");
    text = `${linkPageNum + 1}. ${text}`
    if (text && text.length > 15) {
        text = text.substring(0, 15) + '...';
    }
    li.innerHTML = text;
    li.setAttribute("onclick", `play(${linkPageNum})`);
    navMenu.appendChild(li);
}

TexSpire.prototype.setPageTheme = function (pageNum, themeName) {
    this.pagesThemeName[pageNum] = themeName;
    let pageDom = document.querySelector(`#page${pageNum}`);
    if (pageDom) {
        pageDom.style.background = this.themes[this.getPageTheme(pageNum)]['background'];
    }
    let pageTitleDom = document.querySelector(`#page-title-${pageNum}`);
    if (pageTitleDom) {
        pageTitleDom.style.color = this.themes[this.getPageTheme(pageNum)]['titleColor'];
    }
    let pageSubTitleDom = document.querySelector(`#page-sub-title-${pageNum}`);
    if (pageSubTitleDom) {
        pageSubTitleDom.style.color = this.themes[this.getPageTheme(pageNum)]['subTitleColor'];
    }
}

TexSpire.prototype.getPageTheme = function (pageNum) {
    if (this.pagesThemeName[pageNum]) {
        return this.pagesThemeName[pageNum]
    }
    return '@theme'
}

TexSpire.prototype.createTitlePage = function (title, subTitle, location) {
    location = (location == undefined || location == null) ? 'left' : location;
    subTitle = (subTitle == undefined || subTitle == null) ? '' : subTitle;
    let pageDom = document.createElement("div")
    pageDom.id = `page${this.pageDoms.length}`;
    pageDom.className = 'page';
    pageDom.style.background = this.themes[this.getPageTheme(this.pageDoms.length)]['background'];
    pageDom.innerHTML = `
                       <div class="title-page-title location-${location}">
                                <div id="page-title-${this.pageDoms.length}" class="title-1">${title}</div>
                                <div id="page-sub-title-${this.pageDoms.length}" class="title-sub">${subTitle}</div>
                       </div>
                        `;

    this.back.appendChild(pageDom);
    this.pageDoms[this.pageDoms.length] = pageDom.id;
    return pageDom;
}

TexSpire.prototype.createNullTitlePage = function (location) {
    let pageDom = document.createElement("div")
    pageDom.id = `page${this.pageDoms.length}`;
    pageDom.className = 'page';
    pageDom.style.background = this.themes[this.getPageTheme(this.pageDoms.length)]['background'];
    pageDom.innerHTML = `
                        <div id="page-content-${this.pageDoms.length}"  class="page-content-v location-${location}">
                       </div>
                        `;

    this.back.appendChild(pageDom);
    this.pageDoms[this.pageDoms.length] = pageDom.id;
    return pageDom;
}

TexSpire.prototype.createPage = function (title, subTitle, location) {
    location = (location == undefined || location == null) ? 'left' : location;
    subTitle = (subTitle == undefined || subTitle == null) ? '' : subTitle;
    let pageDom = document.createElement("div")
    pageDom.id = `page${this.pageDoms.length}`;
    pageDom.className = 'page';
    pageDom.style.background = this.themes[this.getPageTheme(this.pageDoms.length)]['background'];
    pageDom.innerHTML = `
                       <div  id="page-title-div-${this.pageDoms.length}" class="page-title location-${location}">
                                <div id="page-title-${this.pageDoms.length}" class="title-1">${title}</div>
                                <div id="page-sub-title-${this.pageDoms.length}" class="title-sub">${subTitle}</div>
                       </div>
                        <div id="page-content-${this.pageDoms.length}"  class="page-content-v location-${location}">
                       </div>
                        `;

    this.back.appendChild(pageDom);
    this.pageDoms[this.pageDoms.length] = pageDom.id;
    return pageDom;
}

TexSpire.prototype.setTitleLocation = function (pageNum, location) {
    let titleDom = document.querySelector(`#page-title-${pageNum}`);
    let titleDiv = titleDom.parentNode;
    titleDiv.className = titleDiv.className.replace('location-center', '').replace('location-left', '') + ' location-' + location;
}

TexSpire.prototype.setContentLocation = function (pageNum, location) {
    let titleDom = document.querySelector(`#page-content-${pageNum}`);
    titleDom.className = titleDom.className.replace('location-center', '').replace('location-left', '') + ' location-' + location;
}

TexSpire.prototype.setPageTitle = function (pageNum, text) {
    let titleDom = document.querySelector(`#page-title-${pageNum}`);
    // text = `<span onclick="previous();" class="nav-tag"><<<</span>&emsp;${text}&emsp;<span onclick="next();"  class="nav-tag">>>></span>`
    titleDom.innerHTML = text;
}

TexSpire.prototype.setPageBackground = function (pageNum, color) {
    let pageDom = document.querySelector(`#page${pageNum}`);
    pageDom.style.background = color;
}

TexSpire.prototype.setPageSubTitle = function (pageNum, text) {
    let titleDom = document.querySelector(`#page-sub-title-${pageNum}`);
    titleDom.innerHTML = text;
}

TexSpire.prototype.createLabelsToPage = function (pageNum, textList, location, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = `label page-card-${pageNum}`;
    taskDom.style.textAlign = location;
    let theme = this.themes[this.getPageTheme(pageNum)]['@label'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    let colors = ['#32d296', '#21b71b', '#0c7048',
        '#0e2688',
        '#76ee06',
        '#99d20b',
        '#545a77',
        '#198fad',
        '#4f0cf5',
        '#6c41d7',
        '#313ae4'];
    let taskHtml = '';
    for (let i = 0; i < textList.length; i++) {
        let index = Math.floor(Math.random() * 10) + 1;
        let color = colors[index];
        let liText = textList[i];
        taskHtml += `<span class="label-span" style="background-color: ${color}">${liText}</span>`
    }
    taskDom.innerHTML = taskHtml;
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.createLabels = function (pageNum, textList, location, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = 'label';
    taskDom.style.textAlign = location;
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    let taskHtml = '';
    let colors = ['#32d296', '#21b71b', '#0c7048',
        '#0e2688',
        '#76ee06',
        '#f6e523',
        '#545a77',
        '#198fad',
        '#313ae4'];
    for (let i = 0; i < textList.length; i++) {
        let index = Math.floor(Math.random() * 8) + 1;
        let color = colors[index];
        let liText = textList[i];
        taskHtml += `<span class="label-span" style="background-color: ${color}">${liText}</span>`
    }
    taskDom.innerHTML = taskHtml;
    return taskDom;
}

TexSpire.prototype.createHToPage = function (pageNum, text,type,width) {
    let taskDom = document.createElement("div");
    taskDom.className = `title-h page-card-${pageNum}`;
    // let theme = this.themes[this.getPageTheme(pageNum)]['@quote'];
    // taskDom.style.background = theme['background'];
    taskDom.style.width = `${width}px`
    taskDom.style.height = `auto`;
    let fontSizes = {
        'H1':'40px',
        'H2':'35px',
        'H3':'30px',
        'H4':'25px',
        'H5':'20px',
    }
    taskDom.style.fontSize = fontSizes[type];
    let taskHtml = text;
    taskDom.innerHTML = taskHtml;
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.createQuoteToPage = function (pageNum, text, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = `quote page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@quote'];
    taskDom.style.background = theme['background'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    let taskHtml = text;

    taskDom.innerHTML = taskHtml;
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.createQuote = function (text, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = 'quote';
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    let taskHtml = text;
    taskDom.innerHTML = taskHtml;
    return taskDom;
}

TexSpire.prototype.createTask = function (taskList, tag, width, height, checks) {
    let taskDom = document.createElement("ul");
    taskDom.className = 'task';
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        taskDom.style.height = `${height}px`
    }
    let taskHtml = '';
    let checkSet = false;
    if (checks != undefined && checks != null) {
        checkSet = true;
    }
    for (let i = 0; i < taskList.length; i++) {
        let liText = taskList[i];
        taskHtml += `<li><input class="task-tag-check" type="${(tag == undefined || tag == null) ? 'checkbox' : tag}" ${checkSet ? checks[i] : 'checked'}/>${liText}</li>`
    }
    taskDom.innerHTML = taskHtml;
    return taskDom;
}


TexSpire.prototype.createVersionCardXToPage = function (pageNum, title, versionList, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = `ts-common-card page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@list'];
    taskDom.style.background = theme['background'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width + 80}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height + 40}px`;
        }
    }

    let color = this.randomColor();
    let titleDom = document.createElement("div");
    titleDom.className = 'ts-common-card-title';
    titleDom.style.background = color;
    titleDom.innerHTML = title;
    taskDom.appendChild(titleDom);

    let bodyDom = document.createElement("div");
    bodyDom.className = 'ts-common-card-body';
    bodyDom.style.textAlign = 'center';

    let taskHtml = '';
    for (let i = 0; i < versionList.length; i++) {
        let liText = versionList[i];
        let v = liText['version'];
        let name = liText['name'];
        let description = liText['description'];
        if (i % 2 != 0) {
            let leftHtml = ` <li style="display: flex;justify-content: center;">
                                <div style=";width: 300px;padding:2px 15px 15px 15px;;border-top: 1px solid #e9eaec">
                                     <div style=";cursor: pointer;background: inherit;color: #03052c;border-radius: 5px;margin-bottom: 10px;text-align: right;width: 285px;padding:5px">
                                        <div style="font-size: 20px">${name}</div>
                                        <div style="font-size: 18px;margin-top:0px;color: #525454;line-height: 25px">${description}</div>
                                     </div>
                                </div>
                                 <i style="width: 10px;height: 10px;background: #1ebea8;position:relative;top: 20px;border-radius: 10px;left: 6px"></i>
                                 <div style="border-left: 2px solid #1e26be;width: 300px;text-align: left;display: flex;padding:2px 15px 15px 15px;border-top: 1px solid #e9eaec">
                                       <span style="margin:0;font-size: 22px;color: #17814b;font-weight: bold;width: 285px;text-align: left;padding:5px">${v}</span>
                                </div>
                        </li>`;
            taskHtml += leftHtml;
        } else {
            let rightHtml = ` <li style="display: flex;justify-content: center">
                                 <div style="width: 300px;text-align: right;display: flex;;padding:2px 15px 15px 15px;border-top: 1px solid #e9eaec">
                                       <span style="margin:0;font-size: 22px;color: #17814b;font-weight: bold;width: 285px;text-align: right;padding:5px">${v}</span>
                                </div>
                               <i style="width: 10px;height: 10px;background: #1ebea8;position:relative;top: 20px;border-radius: 10px;left: 6px"></i>
                                 <div style="border-left: 2px solid #1e26be;width: 300px;padding:2px 15px 15px 15px;;border-top: 1px solid #e9eaec">
                                     <div style="cursor: pointer;background: inherit;color: #03052c;border-radius: 5px;margin-bottom: 10px;text-align: left;width: 285px;padding:5px">
                                        <div style="font-size: 20px">${name}</div>
                                        <div style="font-size: 18px;margin-top:0px;color: #525454;line-height: 25px">${description}</div>
                                     </div>
                                </div>
                        </li>`;
            taskHtml += rightHtml;
        }
    }
    bodyDom.innerHTML = taskHtml;
    taskDom.appendChild(bodyDom);
    this.addPageContent(pageNum, taskDom)
    return taskDom;
}

TexSpire.prototype.createVersionCardToPage = function (pageNum, title, versionList, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = `ts-common-card page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@list'];
    taskDom.style.background = theme['background'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width + 80}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height + 40}px`;
        }
    }

    let color = this.randomColor();
    let titleDom = document.createElement("div");
    titleDom.className = 'ts-common-card-title';
    titleDom.style.background = color;
    titleDom.innerHTML = title;
    taskDom.appendChild(titleDom);

    let bodyDom = document.createElement("div");
    bodyDom.className = 'ts-common-card-body';

    let taskHtml = '';
    for (let i = 0; i < versionList.length; i++) {
        let liText = versionList[i];
        let v = liText['version'];
        let name = liText['name'];
        let description = liText['description'];
        taskHtml += `  <li style="display: flex;">
            <span style="font-size: 22px;margin:1px 10px 1px 10px;color: #17814b;font-weight: bold;width: 110px;text-align: right">${v}</span>
            <i style="width: 10px;height: 10px;background: #1ebea8;position:relative;top: 15px;border-radius: 10px;left: 6px"></i>
            <span style=";padding:0px 10px 15px 10px;border-left: 2px solid #1e26be;background: white;width: 400px;border-radius: 0 5px 5px 0;">
              <div style=";cursor: pointer;background: inherit;color: #03052c;border-radius: 5px;margin-bottom: 10px;padding: 0 8px 5px 5px">
                    <div style="font-size: 20px">${name}</div>
                    <div style="font-size: 18px;margin-top:0px;color: #525454;line-height: 30px">${description}</div>
                </div>
            </span>
        </li>`
    }
    bodyDom.innerHTML = taskHtml;
    taskDom.appendChild(bodyDom);
    this.addPageContent(pageNum, taskDom)
    return taskDom;
}

TexSpire.prototype.createListCardToPage = function (pageNum, title, taskList, tag, width, height, checks) {
    let taskDom = document.createElement("div");
    taskDom.className = `ts-common-card page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@list'];
    taskDom.style.background = theme['background'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width + 80}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height + 40}px`;
        }
    }

    let color = this.randomColor();
    let titleDom = document.createElement("div");
    titleDom.className = 'ts-common-card-title';
    titleDom.style.background = color;
    titleDom.innerHTML = title;
    taskDom.appendChild(titleDom);

    let bodyDom = document.createElement("div");
    bodyDom.className = 'ts-common-card-body';

    let taskHtml = '';
    let checkSet = false;
    if (checks != undefined && checks != null) {
        checkSet = true;
    }
    for (let i = 0; i < taskList.length; i++) {
        let liText = taskList[i];
        taskHtml += `<li><input class="task-tag-check" type="${(tag == undefined || tag == null) ? 'checkbox' : tag}" ${checkSet ? checks[i] : 'checked'}/>${liText}</li>`
    }
    bodyDom.innerHTML = taskHtml;
    taskDom.appendChild(bodyDom);

    this.addPageContent(pageNum, taskDom)
    return taskDom;
}

TexSpire.prototype.createTaskToPage = function (pageNum, taskList, tag, width, height, checks) {
    let taskDom = document.createElement("ul");
    taskDom.className = `task page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@list'];
    taskDom.style.background = theme['background'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        taskDom.style.height = `${height}px`
    }
    let taskHtml = '';
    let checkSet = false;
    if (checks != undefined && checks != null) {
        checkSet = true;
    }
    for (let i = 0; i < taskList.length; i++) {
        let liText = taskList[i];
        taskHtml += `<li><input class="task-tag-check" type="${(tag == undefined || tag == null) ? 'checkbox' : tag}" ${checkSet ? checks[i] : 'checked'}/>${liText}</li>`
    }
    taskDom.innerHTML = taskHtml;
    this.addPageContent(pageNum, taskDom)
    return taskDom;
}

TexSpire.prototype.createText = function (text, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = 'text';
    taskDom.style.lineHeight = '40px';
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`;
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.innerHTML = text;
    return taskDom;
}


TexSpire.prototype.createTextToPage = function (pageNum, text, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = `text page-card-${pageNum}`;
    taskDom.style.lineHeight = '40px';
    let theme = this.themes[this.getPageTheme(pageNum)]['@text'];
    taskDom.style.background = theme['background'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`;
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.innerHTML = text;
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.createTitleText = function (title, text, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = 'card';
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`;
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.innerHTML = `
                         <div class="title-3">${title}</div>
                         <hr style="background-color: green;border: none;height: 1px">
                         <p style="line-height: 30px">${text}</p>
                        `;
    return taskDom;
}

TexSpire.prototype.createTitleTextToPage = function (pageNum, title, text, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = `card page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@text'];
    taskDom.style.background = theme['background'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`;
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.innerHTML = `
                         <div class="title-3" style="font-size: ${theme['title-font-size']};color: ${theme['title-font-color']}">${title}</div>
                         <hr style="background-color: green;border: none;height: 1px">
                         <p style="line-height: 30px">${text}</p>
                        `;
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.randomColor = function () {
    let color = this.colors[Math.floor(Math.random() * this.colors.length) + 1];
    if (this.lastRandomColor == color) {
        return this.randomColor();
    }
    this.lastRandomColor = color;
    return color;
}

TexSpire.prototype.createTextCardToPage = function (pageNum, title, text, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = `ts-common-card page-card-${pageNum}`;
    if (width != undefined && width != null) {
        taskDom.style.width = `${width + 80}px`;
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height + 40}px`;
        }
    }

    let color = this.randomColor();
    let titleDom = document.createElement("div");
    titleDom.className = 'ts-common-card-title';
    titleDom.style.background = color;
    titleDom.innerHTML = title;
    taskDom.appendChild(titleDom);

    let bodyDom = document.createElement("div");
    bodyDom.className = 'ts-common-card-body';
    bodyDom.innerHTML = text;
    taskDom.appendChild(bodyDom);
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.createTitleTask = function (title, taskList, tag, width, height, checks) {
    let taskDom = document.createElement("div");
    taskDom.className = 'card';
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`;
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }

    let taskHtml = '<ul class="task-card">'
    let checkSet = false;
    if (checks != undefined && checks != null) {
        checkSet = true;
    }
    for (let i = 0; i < taskList.length; i++) {
        let liText = taskList[i];
        taskHtml += `<li><input class="task-tag-check" type="${(tag == undefined || tag == null) ? 'checkbox' : tag}" ${checkSet ? checks[i] : 'checked'}/>${liText}</li>`
    }
    taskHtml += '</ul>';

    taskDom.innerHTML = `
                         <div class="title-3">${title}</div>
                         <hr style="background-color: green;border: none;height: 1px">
                         ${taskHtml}
                        `;
    return taskDom;
}

TexSpire.prototype.createTitleTaskToPage = function (pageNum, title, taskList, tag, width, height, checks) {
    let taskDom = document.createElement("div");
    taskDom.className = `card page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@list'];
    taskDom.style.background = theme['background'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`;
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }

    let taskHtml = '<ul class="task-card">'
    let checkSet = false;
    if (checks != undefined && checks != null) {
        checkSet = true;
    }
    for (let i = 0; i < taskList.length; i++) {
        let liText = taskList[i];
        taskHtml += `<li><input class="task-tag-check" type="${(tag == undefined || tag == null) ? 'checkbox' : tag}" ${checkSet ? checks[i] : 'checked'}/>${liText}</li>`
    }
    taskHtml += '</ul>';

    taskDom.innerHTML = `
                         <div class="title-3" style="font-size: ${theme['title-font-size']};color: ${theme['title-font-color']}">${title}</div>
                         <hr style="background-color: green;border: none;height: 1px">
                         ${taskHtml}
                        `;
    this.addPageContent(pageNum, taskDom)
    return taskDom;
}

TexSpire.prototype.createPieChart = function (title, xs, ys, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = 'chart';
    let myChart = echarts.init(taskDom);
    let data = []
    for (let i = 0; i < ys.length; i++) {
        let serie = {
            name: xs[i],
            value: ys[i],
        }
        data.push(serie);
    }
    var option = {
        title: {
            text: title,
            left: 'center'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        series: [
            {
                type: 'pie',
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: data
            },
        ]
    };
    myChart.setOption(option)
    return taskDom;
}

TexSpire.prototype.createPieChartToPage = function (pageNum, title, xs, ys, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = `chart page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@chart'];
    taskDom.style.background = theme['background'];
    let myChart = echarts.init(taskDom);
    let data = []
    for (let i = 0; i < ys.length; i++) {
        let serie = {
            name: xs[i],
            value: ys[i],
        }
        data.push(serie);
    }
    var option = {
        title: {
            text: title,
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        series: [
            {
                type: 'pie',
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                label: {
                    formatter: '{b}：{d}%',
                },
                data: data
            },
        ]
    };
    myChart.setOption(option);
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.createBarCharts = function (title, names, xs, yss, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = 'chart';
    let myChart = echarts.init(taskDom);
    let colors = ['#35d996', '#21b71b', '#0c7048',
        '#20dccd',
        '#76ee06',
        '#e70f48',
        '#031001',
        '#313ae4'];
    let series = []
    for (let i = 0; i < yss.length; i++) {
        let serie = {
            name: names[i],
            smooth: true,
            data: yss[i],
            type: 'bar',
            itemStyle: {
                color: colors[Math.floor(Math.random() * 5) + 1],
                borderRadius: 8
            },
            markLine: {
                label: {
                    formatter: '平均值：{c}'
                },
                data: [{type: 'average', name: 'Avg'}]
            },
            markPoint: {
                data: [
                    {type: 'max', name: 'Max'},
                    {type: 'min', name: 'Min'}
                ]
            },
        }
        series.push(serie);
    }
    var option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        // color: colors[Math.floor(Math.random() * 5) + 1],
        legend: {},
        animation: true,
        xAxis: {
            data: xs
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: series
    };
    myChart.setOption(option)
    return taskDom;
}


TexSpire.prototype.createBarChartsToPage = function (pageNum, title, names, xs, yss, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = `chart page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@chart'];
    taskDom.style.background = theme['background'];
    let myChart = echarts.init(taskDom);
    let colors = ['#35d996', '#21b71b', '#0c7048',
        '#20dccd',
        '#76ee06',
        '#e70f48',
        '#031001',
        '#313ae4'];
    let series = []
    for (let i = 0; i < yss.length; i++) {
        let serie = {
            name: names[i],
            smooth: true,
            data: yss[i],
            type: 'bar',
            itemStyle: {
                color: colors[Math.floor(Math.random() * 5) + 1],
                borderRadius: 8
            },
            markLine: {
                label: {
                    formatter: '平均值：{c}'
                },
                data: [{type: 'average', name: 'Avg'}]
            },
            markPoint: {
                data: [
                    {type: 'max', name: 'Max'},
                    {type: 'min', name: 'Min'}
                ]
            },
        }
        series.push(serie);
    }
    var option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        // color: colors[Math.floor(Math.random() * 5) + 1],
        legend: {},
        animation: true,
        xAxis: {
            data: xs
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: series
    };
    myChart.setOption(option)
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}


TexSpire.prototype.createTreeToPage = function (pageNum, title, dataTree, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    let treeWidth = 200;
    let treeHeight = 300;
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`;
    }

    taskDom.className = `chart page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@chart'];
    taskDom.style.background = theme['background'];

    let colors = [
        '#029a5c',
        '#21b71b',
        '#30213d',
        '#16162d',
        '#1aba73',
        '#20dccd',
        '#8002ef',
        '#1f9196',
        '#0c36e1',
        '#a830c2',
        '#0b0e54'];
    let deep = 0;
    let vdeep = 0;
    function setItemStyle(root,n) {
        deep = n;
        if (!root['children']) {
            return
        }
        n +=1;
        let clen = root['children'].length;
        if (clen>vdeep) {
            vdeep = clen
        }
        let itemBgindex = Math.floor(Math.random() * 7) + 1
        for (let i = 0; i < clen; i++) {
            let child = root['children'][i];
            let rcolor = colors[Math.floor(Math.random() * colors.length) + 1];
            child.itemStyle = {
                color: rcolor,
                borderColor: rcolor
            };
            child.lineStyle = {
                color: rcolor,
                borderColor: rcolor
            };
            child.level = n;
            child.itemBgindex = itemBgindex;
            setItemStyle(child,n);
        }
    }

    if (dataTree) {
        dataTree['itemStyle']  = {
            color: this.randomColor(),
        }
        dataTree['lineStyle']  ={
            color: this.randomColor(),
        }
        dataTree.level=0
        let itemBgindex = Math.floor(Math.random() * 7) + 1
        dataTree.itemBgindex = itemBgindex;
        setItemStyle(dataTree,0)
    }
    if (height=='auto') {
        taskDom.style.height = `${70*vdeep}px`;
    }else {
        taskDom.style.height = `${height}px`;
    }
    let myChart = echarts.init(taskDom);
    let option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                id: 0,
                roam:true,
                name: 'tree1',
                data: [dataTree],
                left: '20%',
                // right: '20%',
                width:deep<2?treeWidth:width-400,
                // height:treeHeight,
                edgeShape: 'polyline',
                symbolSize: 10,
                symbol:'emptyCircle',
                symbolRotate:270,
                edgeShape: 'polyline',
                edgeForkPosition: '21%',
                initialTreeDepth: 2,
                lineStyle: {
                    width: 2
                },
                label: {
                    backgroundColor: '#fff',
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    formatter: function (params) {

                        let bg = `bg${params.data.itemBgindex}`;
                        return [
                            '{' + bg + '| '+params.name+'}',
                        ].join('\n');
                    },
                    backgroundColor: '#ddd',
                    borderColor: '#88e781',
                    borderWidth: 1,
                    borderRadius: 5,
                    color: '#000',
                    fontSize: 12,
                    rich: {
                        bg0: {
                            align: 'center',
                            backgroundColor:  '#1b1eda',
                            borderColor:  '#1b1eda',
                            height: 30,
                            fontSize:15,
                            borderRadius: [3,3, 3, 3],
                            padding: [1, 10, 1, 5],
                            width: '100%',
                            color: '#eee'
                        },
                        bg1: {
                            align: 'center',
                            backgroundColor:  '#029a5c',
                            borderColor:  '#029a5c',
                            height: 30,
                            fontSize:15,
                            borderRadius: [3,3, 3, 3],
                            padding: [1, 10, 1, 5],
                            width: '100%',
                            color: '#eee'
                        },
                        bg2: {
                            align: 'center',
                            backgroundColor:  '#0c36e1',
                            borderColor:  '#0c36e1',
                            height: 30,
                            fontSize:15,
                            borderRadius: [3,3, 3, 3],
                            padding: [1, 10, 1, 5],
                            width: '100%',
                            color: '#eee'
                        },
                        bg3: {
                            align: 'center',
                            backgroundColor:  '#7d3cb6',
                            borderColor:  '#7d3cb6',
                            height: 30,
                            fontSize:15,
                            borderRadius: [3,3, 3, 3],
                            padding: [1, 10, 1, 5],
                            width: '100%',
                            color: '#eee'
                        },
                        bg4: {
                            align: 'center',
                            backgroundColor:  '#8002ef',
                            borderColor:  '#8002ef',
                            height: 30,
                            fontSize:15,
                            borderRadius: [3,3, 3, 3],
                            padding: [1, 10, 1, 5],
                            width: '100%',
                            color: '#eee'
                        },
                        bg5: {
                            align: 'center',
                            backgroundColor:  '#0c36e1',
                            borderColor:  '#0c36e1',
                            height: 30,
                            fontSize:15,
                            borderRadius: [3,3, 3, 3],
                            padding: [1, 10, 1, 5],
                            width: '100%',
                            color: '#eee'
                        },
                        bg6: {
                            align: 'center',
                            backgroundColor:  '#323cde',
                            borderColor:  '#323cde',
                            height: 30,
                            fontSize:15,
                            borderRadius: [3,3, 3, 3],
                            padding: [1, 10, 1, 5],
                            width: '100%',
                            color: '#eee'
                        },
                        bg7: {
                            align: 'center',
                            backgroundColor:  '#a830c2',
                            borderColor:  '#a830c2',
                            height: 30,
                            fontSize:15,
                            borderRadius: [3,3, 3, 3],
                            padding: [1, 10, 1, 5],
                            width: '100%',
                            color: '#eee'
                        },
                    }
                },
                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },
                emphasis: {
                    focus: 'descendant'
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    };
    myChart.setOption(option)
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}



TexSpire.prototype.createLineCharts = function (title, names, xs, yss, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = 'chart';
    let myChart = echarts.init(taskDom);
    let colors = ['#35d996', '#21b71b', '#0c7048',
        '#20dccd',
        '#76ee06',
        '#e70f48',
        '#031001',
        '#313ae4'];
    let series = []
    for (let i = 0; i < yss.length; i++) {
        let serie = {
            name: names[i],
            smooth: true,
            data: yss[i],
            type: 'line',
            itemStyle: {
                color: colors[Math.floor(Math.random() * 5) + 1]
            },
            markLine: {
                label: {
                    formatter: '平均值：{c}'
                },
                data: [{type: 'average', name: 'Avg'}]
            },
            markPoint: {
                data: [
                    {type: 'max', name: 'Max'},
                    {type: 'min', name: 'Min'}
                ]
            },
        }
        series.push(serie);
    }
    var option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        // color: colors[Math.floor(Math.random() * 5) + 1],
        legend: {},
        animation: true,
        xAxis: {
            data: xs
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: series
    };
    myChart.setOption(option)
    return taskDom;
}


TexSpire.prototype.createAreaChartsToPage = function (pageNum, title, names, xs, yss, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = `chart page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@chart'];
    taskDom.style.background = theme['background'];
    let myChart = echarts.init(taskDom);
    let colors = ['#35d996', '#21b71b', '#0c7048',
        '#20dccd',
        '#76ee06',
        '#e70f48',
        '#031001',
        '#313ae4'];
    let series = []
    for (let i = 0; i < yss.length; i++) {
        let serie = {
            name: names[i],
            smooth: true,
            data: yss[i],
            type: 'line',
            itemStyle: {
                color: colors[Math.floor(Math.random() * 5) + 1]
            },
            areaStyle: {},
            markLine: {
                label: {
                    formatter: '平均值：{c}'
                },
                data: [{type: 'average', name: 'Avg'}]
            },
            markPoint: {
                data: [
                    {type: 'max', name: 'Max'},
                    {type: 'min', name: 'Min'}
                ]
            },
        }
        series.push(serie);
    }
    var option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        // color: colors[Math.floor(Math.random() * 5) + 1],
        legend: {},
        animation: true,
        xAxis: {
            data: xs
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: series
    };
    myChart.setOption(option);
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}


TexSpire.prototype.createLineChartsToPage = function (pageNum, title, names, xs, yss, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = `chart page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@chart'];
    taskDom.style.background = theme['background'];
    let myChart = echarts.init(taskDom);
    let colors = ['#35d996', '#21b71b', '#0c7048',
        '#20dccd',
        '#76ee06',
        '#e70f48',
        '#031001',
        '#313ae4'];
    let series = []
    for (let i = 0; i < yss.length; i++) {
        let serie = {
            name: names[i],
            smooth: true,
            data: yss[i],
            type: 'line',
            itemStyle: {
                color: colors[Math.floor(Math.random() * 5) + 1]
            },
            markLine: {
                label: {
                    formatter: '平均值：{c}'
                },
                data: [{type: 'average', name: 'Avg'}]
            },
            markPoint: {
                data: [
                    {type: 'max', name: 'Max'},
                    {type: 'min', name: 'Min'}
                ]
            },
        }
        series.push(serie);
    }
    var option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        // color: colors[Math.floor(Math.random() * 5) + 1],
        legend: {},
        animation: true,
        xAxis: {
            data: xs
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: series
    };
    myChart.setOption(option);
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.createWordCloud = function (title, xs, ys, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = 'chart';
    let myChart = echarts.init(taskDom);
    let data = []
    for (let i = 0; i < ys.length; i++) {
        let serie = {
            name: xs[i],
            value: ys[i],
        }
        data.push(serie);
    }
    var option = {
        title: {
            text: title,
            left: 'center'
        },
        toolbox: {
            show: true,
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {},
        animation: true,
        series: [
            {
                type: 'wordCloud',
                shape: 'circle',
                keepAspect: false,
                left: 'center',
                top: 'center',
                right: null,
                bottom: null,
                sizeRange: [12, 60],
                rotationRange: [-90, 90],
                rotationStep: 45,
                gridSize: 8,
                drawOutOfBound: false,
                layoutAnimation: true,
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    focus: 'self',
                    textStyle: {
                        textShadowBlur: 10,
                        textShadowColor: '#333'
                    }
                },
                data: data
            }
        ]
    };
    myChart.setOption(option)
    return taskDom;
}


TexSpire.prototype.createWordCloudToPage = function (pageNum, title, xs, ys, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = `chart page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@chart'];
    taskDom.style.background = theme['background'];
    let myChart = echarts.init(taskDom);
    let data = []
    for (let i = 0; i < ys.length; i++) {
        let serie = {
            name: xs[i],
            value: ys[i],
        }
        data.push(serie);
    }
    var option = {
        title: {
            text: title,
            left: 'center'
        },
        toolbox: {
            show: true,
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {},
        animation: true,
        series: [
            {
                type: 'wordCloud',
                shape: 'circle',
                keepAspect: false,
                left: 'center',
                top: 'center',
                right: null,
                bottom: null,
                sizeRange: [12, 60],
                rotationRange: [-90, 90],
                rotationStep: 45,
                gridSize: 8,
                drawOutOfBound: false,
                layoutAnimation: true,
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    focus: 'self',
                    textStyle: {
                        textShadowBlur: 10,
                        textShadowColor: '#333'
                    }
                },
                data: data
            }
        ]
    };
    myChart.setOption(option);
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.createLineChart = function (title, xs, ys, width, height) {
    title = (title != undefined && title != null) ? title : '';
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = 'chart';
    let myChart = echarts.init(taskDom);
    let colors = ['#35d996', '#21b71b', '#0c7048', '#20dccd', '#313ae4'];
    var option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        color: colors[Math.floor(Math.random() * 5) + 1],
        legend: {},
        animation: true,
        xAxis: {
            data: xs
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            {
                smooth: true,
                data: ys,
                type: 'line',
                markLine: {
                    label: {
                        formatter: '平均值：{c}'
                    },
                    data: [{type: 'average', name: 'Avg'}]
                },
                markPoint: {
                    data: [
                        {type: 'max', name: 'Max'},
                        {type: 'min', name: 'Min'}
                    ]
                },
            }
        ]
    };
    myChart.setOption(option)
    return taskDom;
}

TexSpire.prototype.createImageToPage = function (pageNum, image, text, width, height) {
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    let theme = this.themes[this.getPageTheme(pageNum)]['@image'];
    taskDom.style.background = theme['background'];
    taskDom.className = `image page-card-${pageNum}`;
    taskDom.innerHTML = `
                         <img src="${image}" height="${height}" width="${width}"/>
                        `;
    this.addPageContent(pageNum, taskDom);
    return taskDom;
}

TexSpire.prototype.createImage = function (image, text, width, height) {
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.className = 'image';
    taskDom.innerHTML = `
                         <img src="${image}" height="${height}" width="${width}"/>
                         <div class="title-4" style="text-align: left">${text}</div>
                        `;
    return taskDom;
}

// TexSpire.prototype.createCode = function (code, type,theme, width,height) {
//     let taskDom = document.createElement("div");
//     if (width != undefined && width != null) {
//         taskDom.style.width = `${width}px`
//     }
//     if (height != undefined && height != null) {
//         if ('auto'==height) {
//             taskDom.style.height = `auto`;
//         }else {
//             taskDom.style.height = `${height}px`;
//         }
//     }
//     taskDom.className = `${theme}-code`;
//     taskDom.innerHTML = this.codeParser.parse(code,type,theme);
//     return taskDom;
// }

TexSpire.prototype.createCode = function (code, type, theme, width, height) {
    let taskDom = document.createElement("div");
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }

    taskDom.className = `${theme}-code`;
    let codeDom = document.createElement("div");
    let types = ['javascript', 'python', 'sql', 'yaml', 'properties', 'css', 'cypher', 'php', 'shell', 'xml', 'htmlmixed', 'clike'];
    if (types.indexOf(type) == -1) {
        type = 'javascript';
    }
    if ('java' == type) {
        type = 'clike';
    }
    if ('html' == type) {
        type = 'htmlmixed';
    }
    if ('pom' == type) {
        type = 'xml';
    }
    let myCodeMirror = CodeMirror(codeDom, {
        value: code,
        mode: type,
        theme: theme == 'dark' ? "oceanic-next" : "oceanic-light",
        lineNumbers: false,
        readOnly: true,
        lineWrapping: false,
        showCursorWhenSelecting: true,
        autoRefresh: true
    });
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
            myCodeMirror.setSize('auto','auto');

        } else {
            taskDom.style.height = `${height}px`;
        }
    }
    taskDom.appendChild(codeDom)
    setTimeout(function () {
        myCodeMirror.refresh();
    }, 100);
    return taskDom;
}


TexSpire.prototype.createTableToPage = function (pageNum, title, theads, tbodys, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = `text page-card-${pageNum}`;
    let theme = this.themes[this.getPageTheme(pageNum)]['@table'];
    taskDom.style.background = theme['background'];
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }

    let ths = '';
    for (let i = 0; i < theads.length; i++) {
        let th = theads[i];
        ths += `<th style="background:${theme['title-background']};border:1px solid ${theme['title-background']}">${th}</th>`;
    }

    let tbsHtml = ''
    for (let i = 0; i < tbodys.length; i++) {
        let tbs = tbodys[i];
        tbsHtml += '<tr>';
        for (let j = 0; j < tbs.length; j++) {
            let tb = tbs[j];
            tbsHtml += `<td style="border:1px solid ${theme['in-border']}">${tb}</td>`;
        }
        tbsHtml += '</tr>';
    }
    taskDom.innerHTML = `
                <table  class="table">
                     <caption class="title-3" style="font-size: ${theme['title-font-size']};color: ${theme['title-font-color']}">${title}</caption>
                        <thead>
                            <tr>
                                ${ths}
                            </tr>
                        </thead>
                        <tbody>
                            ${tbsHtml}
                        </tbody>
                </table>
                        `;
    this.addPageContent(pageNum, taskDom)
    return taskDom;
}

TexSpire.prototype.createTable = function (title, theads, tbodys, width, height) {
    let taskDom = document.createElement("div");
    taskDom.className = 'text';
    if (width != undefined && width != null) {
        taskDom.style.width = `${width}px`
    }
    if (height != undefined && height != null) {
        if ('auto' == height) {
            taskDom.style.height = `auto`;
        } else {
            taskDom.style.height = `${height}px`;
        }
    }

    let ths = '';
    for (let i = 0; i < theads.length; i++) {
        let th = theads[i];
        ths += `<th>${th}</th>`;
    }

    let tbsHtml = ''
    for (let i = 0; i < tbodys.length; i++) {
        let tbs = tbodys[i];
        tbsHtml += '<tr>';
        for (let j = 0; j < tbs.length; j++) {
            let tb = tbs[j];
            tbsHtml += `<td>${tb}</td>`;
        }
        tbsHtml += '</tr>';
    }
    taskDom.innerHTML = `
                <table  class="table">
                     <caption class="title-3">${title}</caption>
                        <thead>
                            <tr>
                                ${ths}
                            </tr>
                        </thead>
                        <tbody>
                            ${tbsHtml}
                        </tbody>
                </table>
                        `;
    return taskDom;
}

TexSpire.prototype.addPageContent = function (pageNum, content) {
    let contentDom = document.querySelector(`#page-content-${pageNum}`);
    contentDom.appendChild(content);
    return contentDom;
}

TexSpire.prototype.clearContent = function (pageNum) {
    let contentDom = document.querySelector(`#page-content-${pageNum}`);
    contentDom.innerHTML = '';
    return contentDom;
}

TexSpire.prototype.removeContent = function (pageNum) {
    let contentDom = document.querySelector(`#page-content-${pageNum}`);
    contentDom.remove();
}


TexSpire.prototype.setContentDirection = function (pageNum, dir) {
    let contentDom = document.querySelector(`#page-content-${pageNum}`);
    dir = `page-content-${dir}`
    contentDom.className = contentDom.className
        .replace('page-content-h', dir)
        .replace('page-content-v', dir);
    return contentDom;
}

TexSpire.prototype.fullScreen = function () {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

TexSpire.prototype.exitFullScreen = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
    }
}


TexSpire.prototype.playPage = function (pageNum, isAnimate) {
    if (pageNum == undefined || pageNum == null) {
        pageNum = 0;
    }
    if (this.playPageNum == pageNum) {
        return
    }
    for (let i = 0; i < this.pageDoms.length; i++) {
        let dom = document.querySelector(`#${this.pageDoms[i]}`);
        dom.style.display = 'none';
        if (pageNum == i) {

            dom.style.display = 'block';
            this.playPageNum = pageNum;
            if (isAnimate) {
                let pageContentDom = document.querySelector(`#page-content-${pageNum}`);
                if (!pageContentDom) {
                    continue
                }
                let playClassName = pageContentDom.className;
                let cards = document.querySelectorAll(`.page-card-${pageNum}`);
                let animationName = 'hcardShow'
                if (playClassName.indexOf("page-content-v") > -1) {
                    animationName = 'vcardShow'
                }
                for (let j = 0; j < cards.length; j++) {
                    let card = cards[j];
                    card.style.animation = `${animationName} 1s`;
                }
            }
        }
    }
    if (globalTexSpire == undefined || globalTexSpire == null) {
        globalTexSpire = this;
    }
}

TexSpire.prototype.getCurrentPage = function (pageNum) {
    return this.playPageNum;
}

TexSpire.prototype.nextPage = function () {
    if (this.playPageNum == this.pageDoms.length - 1) {
        return
    }
    this.playPage(this.playPageNum + 1, true);
}

TexSpire.prototype.previousPage = function () {
    if (this.playPageNum < 1) {
        return
    }
    this.playPage(this.playPageNum - 1, true);
}

let globalTexSpire;

function play(pageNum) {
    globalTexSpire.playPage(pageNum, true);
}

function next() {
    globalTexSpire.nextPage();
}

function previous() {
    globalTexSpire.previousPage();
}

function fullPage() {
    globalTexSpire.fullScreen();
}

function exitPage() {
    globalTexSpire.exitFullScreen();
}

function CodeParser() {
    this.config = {
        'java': {
            'marks': ['{', '}', '(', ')', ';'],
            'keys': ['public', 'static', 'class', 'break', 'for', '=', 'private', 'protected', 'if', 'while', 'interface', 'import', 'package', 'return'],
            'style': {
                'object': 'code-java-oname',
                'method': 'code-java-method',
                'key': 'code-java-key',
                'mark': 'code-java-mark',
                'anno': 'code-java-anno'
            }
        },
        'python': {
            'marks': ['{', '}', '(', ')', ':'],
            'keys': ['class', 'break', 'for', '=', 'if', 'while', 'range', 'len', 'max', 'min', 'import', 'return', 'def', 'pass', 'global'],
            'style': {
                'object': 'code-java-oname',
                'method': 'code-java-method',
                'key': 'code-java-key',
                'mark': 'code-java-mark',
                'anno': 'code-java-anno'
            }
        }
    }
}

CodeParser.prototype.parse = function (codeLanguage, type, theme) {
    codeLanguage = codeLanguage.replaceAll("    ", '&emsp;&emsp; ')
    codeLanguage = codeLanguage.replaceAll("  ", '&emsp; ')
    codeLanguage = codeLanguage.replaceAll("\n", '<br> ')
    codeLanguage = codeLanguage.replaceAll("@", ' @')
    let codeSplit = codeLanguage.split(" ");
    let result = '';
    for (let i = 0; i < codeSplit.length; i++) {
        let module = codeSplit[i];
        if (this.config[type]['keys'].indexOf(module.trim()) > -1) {
            module = `<span class="${theme}-${this.config[type]['style']['key']}">${module}</span>`
        }
        if (module.trim().substring(0, 1) == module.trim().substring(0, 1).toUpperCase() && !module.trim().startsWith("@") && !module.trim().startsWith("{") && !module.trim().startsWith("}") && !module.trim().startsWith("__")) {
            module = `<span class="${theme}-${this.config[type]['style']['object']}">${module}</span>`
        }
        if (module.trim().startsWith("@")) {
            module = `<span class="${theme}-${this.config[type]['style']['anno']}">${module}</span>`
        }
        result += '&nbsp;' + module;
    }

    let codeSplit1 = result.split(".");
    let mcodeLanguage = '';
    for (let i = 0; i < codeSplit1.length; i++) {
        let module = codeSplit1[i];
        let endIndex = module.indexOf('(');
        if (i != 0 && endIndex > 0) {
            module = `.<span class="${theme}-${this.config[type]['style']['method']}">${module.substring(0, endIndex)}</span>${module.substring(endIndex)}`
        } else {
            module = `.${module}`;
        }
        mcodeLanguage += module;
    }
    if (mcodeLanguage.startsWith(".") && !result.startsWith(".")) {
        mcodeLanguage = mcodeLanguage.substring(1);
    }

    mcodeLanguage = mcodeLanguage.replaceAll("{", `<span class="${theme}-${this.config[type]['style']['mark']}">{</span>`);
    mcodeLanguage = mcodeLanguage.replaceAll("}", `<span class="${theme}-${this.config[type]['style']['mark']}">}</span>`)
    return mcodeLanguage;
}

