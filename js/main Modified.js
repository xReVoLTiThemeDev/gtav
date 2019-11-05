"use strict";

var main = (function () {
    /**
     * CONFIGS
     */
    var configs = (function () {
        var instance;
        var Singleton = function (options) {
            var options = options || Singleton.defaultOptions;
            for (var key in Singleton.defaultOptions) {
                this[key] = options[key] || Singleton.defaultOptions[key];
            }
        };
    Singleton.defaultOptions = {
        general_help: "Below there's a list of commands that you can use.\nYou can use autofill by pressing the TAB key, autocompleting if there's only 1 possibility, or showing you a list of possibilities.",
        ls_help: "List information about the files and folders (the current directory by default).",
        cat_help: "Read FILE(s) content and print it to the standard output (screen).",
        whoami_help: "Print the user name associated with the current effective user ID and more info.",
        date_help: "Print the system date and time.",
        help_help: "Print this menu.",
        clear_help: "Clear the terminal screen.",
        reboot_help: "Reboot the system.",
        cd_help: "Change the current working directory.",
        mv_help: "Move (rename) files.",
        rm_help: "Remove files or directories.",
        rmdir_help: "Remove directory, this command will only work if the folders are empty.",
        touch_help: "Change file timestamps. If the file doesn't exist, it's created an empty one.",
        sudo_help: "Execute a command as the superuser.",
        setup_help: "Please wait while the terminal is setup.",
        cmds_help: "Please type !cmds for a list of commands to use in GTA V Online.",
        /* GENERAL - START */
        gtav_general_cmds_help: "All GTA V Online commands, avalible now:",
        gtav_general_cmds_info_start: "",
        gtav_general_cmds_money_help: "Please type !money on/off in the chat.",
        gtav_general_cmds_spawn_vehicle_help: "Spawn Vehicle",
        gtav_general_cmds_spawn_object_help: "Spawn Object",
        gtav_general_cmds_spawn_ped_help: "Spawn Ped",
        gtav_general_cmds_spawn_bodyguard_help: "Spawn Bodyguard",
        gtav_general_cmds_weapons_help: "Give Weapons",
        gtav_general_cmds_info_end: "",
        /* GENERAL - END */
        /* VEHICLE - START */
        gtav_vehicle_cmds_help: "All GTA V Online commands, avalible now: XXXXXXXXXXXXXXXXX",
        gtav_vehicle_cmds_info_start: "",
        gtav_vehicle_cmds_vehicle_upgrade_help: "Vehicle Upgrade",
        gtav_vehicle_cmds_vehicle_repair_help: "Vehicle Repair",
        gtav_vehicle_cmds_vehicle_boost_help: "Vehicle Boost",
        gtav_vehicle_cmds_vehicle_jump_help: "Vehicle Jump",
        gtav_vehicle_cmds_info_end: "",
        /* VEHICLE - END */
        /* GLOBAL START */
        gtav_global_cmds_info_start: "",
        gtav_global_cmds_copsturnblind_help: "Cops Turn Blind Eye",
        gtav_global_cmds_offtheradar_help: "Off The Radar",
        gtav_global_cmds_info_end: "",
        /* GLOBAL END */
        /* WEATHER START */
        gtav_weather_cmds_info_start: "",
        gtav_weather_cmds_weather_day_help: "Weather Day",
        gtav_weather_cmds_weather_night_help: "Weather Night",
        gtav_weather_cmds_weather_halloween_help: "Weather Halloween",
        gtav_weather_cmds_weather_snow_help: "Weather Snow",
        gtav_weather_cmds_info_end: "",
        /* WEATHER END */
        welcome: "Welcome to xReVoLT - iTheme's GTA V Modded Lobby Console Simulation!\n\nPlease take some time out to visit my website located in the bottom-right hand corner.\nEnjoy browsing through the console simulator.\nIn order to get started, please type <b><i>!setup<i><b>.",
        internet_explorer_warning: "NOTE: I see you're using internet explorer, this website won't work properly.",
        welcome_file_name: "Welcome.txt",
        invalid_command_message: "<value>: command not found.",
        setup_message: "\nDownloading necessary terminal files... \n = 1% \n ======= 7% \n ============ 12% \n ===================== 21% \n ========================== 26% \n ================================== 34% \n =========================================== 43% \n ================================================== 50% \n ========================================================== 58% \n ============================================================================== 78% \n ============================================================================================ 92% \n ==================================================================================================== 100% \n Downloaded necessary terminal files... DONE! \n\n Unpacking necessary terminal files... \n = 1% \n===================================================================================================== 100% \n Unpacking necessary terminal files...DONE! \n\nInstalling extension...\n = 1% \n ============================================== 45% \n===================================================================================================== 100% \nInstalling extension.... DONE! \n\n\nPlease type !cmds for a list of commands to use in GTA V Online.\nPlease type !help for a list of commands to use in the console simulation.\n",
        cmds_message: "\nThis is a test.\n",
        reboot_message: "Preparing to reboot...\n\n3...\n\n2...\n\n1...\n\nRebooting...\n\n",
        permission_denied_message: "Unable to '<value>', permission denied.",
        sudo_message: "Unable to sudo using a web client.",
        usage: "Usage",
        file: "file",
        file_not_found: "File '<value>' not found.",
        username: "Username",
        hostname: "Host",
        platform: "Platform",
        accesible_cores: "Accessible cores",
        accesible_gpu: "Accesible GPU cores",
        language: "Language",
        value_token: "<value>",
        host: "xrevoltithemedev.github.io",
        user: "guest",
        is_root: false,
        type_delay: 20
    };
        return {
            getInstance: function (options) {
                instance === void 0 && (instance = new Singleton(options));
                return instance;
            }
        };
    })();
    var files = (function () {
        var instance;
        var Singleton = function (options) {
            var options = options || Singleton.defaultOptions;
            for (var key in Singleton.defaultOptions) {
                this[key] = options[key] || Singleton.defaultOptions[key];
            }
        };
        Singleton.defaultOptions = {
            "About.txt": "This site was made for whenever you join a session that xReVoLT-iTheme is in,\n you might be gifted with a modded GTA V session! \n I have made this website so players can search for commands with ease in this console simulation.",
            "Help.txt": "For a list of commands, please type <b><i>!cmds<i><b>",
            "Contact.txt": "xrevoltithemedev@gmail.com",
            "Website.txt": "https://xrevoltithemedev.github.io/ or https://bit.ly/33bNliV",
            "Visit_My_Website.txt": "https://bit.ly/33bNliV"
        };
        return {
            getInstance: function (options) {
                instance === void 0 && (instance = new Singleton(options));
                return instance;
            }
        };
    })();

    /**
     * AUX FUNCTIONS
     */

    var isUsingIE = (function () {
        return function () {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
        }
    })();

    var ignoreEvent = (function () {
        return function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
    })();

    var scrollToBottom = (function () {
        return function () {
            window.scrollTo(0, document.body.scrollHeight);
        }
    })();

    var isPhone = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);


    /**
     * MODEL
     */

    var InvalidArgumentException = function (message) {
        this.message = message;
        // Use V8's native method if available, otherwise fallback
        if ("captureStackTrace" in Error) {
            Error.captureStackTrace(this, InvalidArgumentException);
        } else {
            this.stack = (new Error()).stack;
        }
    };
    // Extends Error
    InvalidArgumentException.prototype = Object.create(Error.prototype);
    InvalidArgumentException.prototype.name = "InvalidArgumentException";
    InvalidArgumentException.prototype.constructor = InvalidArgumentException;

    var cmds = {
        LS: { value: "!ls", help: configs.getInstance().ls_help },
        CAT: { value: "!cat", help: configs.getInstance().cat_help },
        WHOAMI: { value: "!whoami", help: configs.getInstance().whoami_help },
        DATE: { value: "!date", help: configs.getInstance().date_help },
        HELP: { value: "!help", help: configs.getInstance().help_help },
        SETUP: { value: "!setup", help: configs.getInstance().setup_help },
        CMDS: { value: "!cmds", help: configs.getInstance().cmds_help },
        CLEAR: { value: "!clear", help: configs.getInstance().clear_help },
        REBOOT: { value: "!reboot", help: configs.getInstance().reboot_help },
        CD: { value: "!cd", help: configs.getInstance().cd_help },
        MV: { value: "!mv", help: configs.getInstance().mv_help },
        RM: { value: "!rm", help: configs.getInstance().rm_help },
        RMDIR: { value: "!rmdir", help: configs.getInstance().rmdir_help },
        TOUCH: { value: "!touch", help: configs.getInstance().touch_help },
        SUDO: { value: "!sudo", help: configs.getInstance().sudo_help }
    };

    var gtav_general_cmds = {
        GENERALSTART: { value: "============= GENERAL COMMANDS =============", help: configs.getInstance().gtav_general_cmds_info_start },
        MONEY: { value: "!money", help: configs.getInstance().gtav_general_cmds_money_help },
        SPAWNVEHICLE: { value: "!spawn vehicle", help: configs.getInstance().gtav_general_cmds_spawn_vehicle_help },
        SPAWNOBJECT: { value: "!spawn object", help: configs.getInstance().gtav_general_cmds_spawn_object_help },
        SPAWNPED: { value: "!spawn ped", help: configs.getInstance().gtav_general_cmds_spawn_ped_help },
        SPAWNBODYGUARD: { value: "!spawn bodyguard", help: configs.getInstance().gtav_general_cmds_spawn_bodyguard_help },
        WEAPONS: { value: "!weapons", help: configs.getInstance().gtav_general_cmds_weapons_help },
        GENERALEND: { value: "=============================================", help: configs.getInstance().gtav_general_cmds_info_end },
    };

    var gtav_vehicle_cmds = {
        VEHICLESTART: { value: "============= VEHICLE COMMANDS =============", help: configs.getInstance().gtav_vehicle_cmds_info_start },
        VEHICLEUPGRADE: { value: "!vehicle upgrade", help: configs.getInstance().gtav_vehicle_cmds_vehicle_upgrade_help },
        VEHICLEREPAIR: { value: "!vehicle repair", help: configs.getInstance().gtav_vehicle_cmds_vehicle_repair_help },
        VEHICLEBOOST: { value: "!vehicle boost", help: configs.getInstance().gtav_vehicle_cmds_vehicle_boost_help },
        VEHICLEJUMP: { value: "!vehicle jump", help: configs.getInstance().gtav_vehicle_cmds_vehicle_jump_help },
        VEHICLEEND: { value: "============================================", help: configs.getInstance().gtav_vehicle_cmds_info_end },
    };

    var gtav_global_cmds = {
        GLOBALSTART: { value: "============= GLOBAL COMMANDS =============", help: configs.getInstance().gtav_global_cmds_info_start },
        COPSTURNBLIND: { value: "!copsturnblind", help: configs.getInstance().gtav_global_cmds_copsturnblind_help },
        OFFTHERADAR: { value: "!offtheradar", help: configs.getInstance().gtav_global_cmds_offtheradar_help },
        GLOBALEND: { value: "============================================", help: configs.getInstance().gtav_global_cmds_info_end },
    };

    var gtav_weather_cmds = {
        WEATHERSTART: { value: "============= WEATHER COMMANDS =============", help: configs.getInstance().gtav_weather_cmds_info_start },
        WEATHERDAY: { value: "!weather day", help: configs.getInstance().gtav_weather_cmds_weather_day_help },
        WEATHERNIGHT: { value: "!weather night", help: configs.getInstance().gtav_weather_cmds_weather_night_help },
        WEATHERHALLOWEEN: { value: "!weather halloween", help: configs.getInstance().gtav_weather_cmds_weather_halloween_help },
        WEATHERSNOW: { value: "!weather snow", help: configs.getInstance().gtav_weather_cmds_weather_snow_help },
        WEATHEREND: { value: "============================================", help: configs.getInstance().gtav_weather_cmds_info_end },
    };

    var Terminal = function (prompt, cmdLine, output, sidenav, profilePic, user, host, root, outputTimer) {
        if (!(prompt instanceof Node) || prompt.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + prompt + " for argument 'prompt'.");
        }
        if (!(cmdLine instanceof Node) || cmdLine.nodeName.toUpperCase() !== "INPUT") {
            throw new InvalidArgumentException("Invalid value " + cmdLine + " for argument 'cmdLine'.");
        }
        if (!(output instanceof Node) || output.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }
        if (!(sidenav instanceof Node) || sidenav.nodeName.toUpperCase() !== "DIV") {
            throw new InvalidArgumentException("Invalid value " + sidenav + " for argument 'sidenav'.");
        }
        if (!(profilePic instanceof Node) || profilePic.nodeName.toUpperCase() !== "IMG") {
            throw new InvalidArgumentException("Invalid value " + profilePic + " for argument 'profilePic'.");
        }
        (typeof user === "string" && typeof host === "string") && (this.completePrompt = user + "@" + host + ":~" + (root ? "#" : "$"));
        this.profilePic = profilePic;
        this.prompt = prompt;
        this.cmdLine = cmdLine;
        this.output = output;
        this.sidenav = sidenav;
        this.sidenavOpen = false;
        this.sidenavElements = [];
        this.typeSimulator = new TypeSimulator(outputTimer, output);
    };

    Terminal.prototype.type = function (text, callback) {
        this.typeSimulator.type(text, callback);
    };

    Terminal.prototype.exec = function () {
        var command = this.cmdLine.value;
        this.cmdLine.value = "";
        this.prompt.textContent = "";
        this.output.innerHTML += "<span class=\"prompt-color\">" + this.completePrompt + "</span> " + command + "<br/>";
    };

    Terminal.prototype.init = function () {
        isPhone && (document.getElementById("githubImg").style.display = "none");
        this.sidenav.addEventListener("click", ignoreEvent);
        this.cmdLine.disabled = true;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = true;
        });
        this.prepareSideNav();
        this.lock(); // Need to lock here since the sidenav elements were just added
        document.body.addEventListener("click", this.focus.bind(this));
        this.cmdLine.addEventListener("keydown", function (event) {
            if (event.which === 13 || event.keyCode === 13) {
                this.handleCmd();
                ignoreEvent(event);
            } else if (event.which === 9 || event.keyCode === 9) {
                this.handleFill();
                ignoreEvent(event);
            }
        }.bind(this));
        this.reset();
    };



    Terminal.makeElementDisappear = function (element) {
        element.style.opacity = 0;
        element.style.transform = "translateX(-300px)";
        // Support for old browsers
        element.style.msTransform = "translateX(-300px)";
        element.style.WebkitTransform = "translateX(-300px)";
    };

    Terminal.makeElementAppear = function (element) {
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
        // Support for old browsers
        element.style.msTransform = "translateX(0)";
        element.style.WebkitTransform = "translateX(0)";
    };

    Terminal.prototype.prepareSideNav = function () {
        var capFirst = (function () {
            return function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
        })();
        for (var file in files.getInstance()) {
            var element = document.createElement("button");
            Terminal.makeElementDisappear(element);
            element.onclick = function (file, event) {
                this.handleSidenav(event);
                this.cmdLine.value = "!cat " + file + " ";
                this.handleCmd();
            }.bind(this, file);
            element.appendChild(document.createTextNode(capFirst(file.replace(/\.[^/.]+$/, "").replace(/_/g, " "))));
            this.sidenav.appendChild(element);
            this.sidenavElements.push(element);
        }
        // Shouldn't use document.getElementById but Terminal is already using loads of params
        document.getElementById("sidenavBtn").addEventListener("click", this.handleSidenav.bind(this));
    };

    Terminal.prototype.handleSidenav = function (event) {
        if (this.sidenavOpen) {
            this.profilePic.style.opacity = 0;
            this.sidenavElements.forEach(Terminal.makeElementDisappear);
            this.sidenav.style.width = "50px";
            document.getElementById("sidenavBtn").innerHTML = "&#9776;";
            this.sidenavOpen = false;
        } else {
            this.sidenav.style.width = "300px";
            this.sidenavElements.forEach(Terminal.makeElementAppear);
            document.getElementById("sidenavBtn").innerHTML = "&times;";
            this.profilePic.style.opacity = 1;
            this.sidenavOpen = true;
        }
        document.getElementById("sidenavBtn").blur();
        ignoreEvent(event);
    };

    Terminal.prototype.lock = function () {
        this.exec();
        this.cmdLine.blur();
        this.cmdLine.disabled = true;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = true;
        });
    };

    Terminal.prototype.unlock = function () {
        this.cmdLine.disabled = false;
        this.prompt.textContent = this.completePrompt;
        this.sidenavElements.forEach(function (elem) {
            elem.disabled = false;
        });
        scrollToBottom();
        if (!isPhone) {
            this.focus();
        }
    };

    Terminal.prototype.handleFill = function () {
        var cmdComponents = this.cmdLine.value.trim().split(" ");
        if ((cmdComponents.length <= 1) || (cmdComponents.length === 2 && cmdComponents[0] === cmds.CAT.value)) {
            this.lock();
            var possibilities = [];
            if (cmdComponents[0].toLowerCase() === cmds.CAT.value) {
                if (cmdComponents.length === 1) {
                    cmdComponents[1] = "";
                }
                if (configs.getInstance().welcome_file_name.startsWith(cmdComponents[1].toLowerCase())) {
                    possibilities.push(cmds.CAT.value + " " + configs.getInstance().welcome_file_name);
                }
                for (var file in files.getInstance()) {
                    if (file.startsWith(cmdComponents[1].toLowerCase())) {
                        possibilities.push(cmds.CAT.value + " " + file);
                    }
                }
            } else {
                for (var command in cmds) {
                    if (cmds[command].value.startsWith(cmdComponents[0].toLowerCase())) {
                        possibilities.push(cmds[command].value);
                    }
                }
            }
            if (possibilities.length === 1) {
                this.cmdLine.value = possibilities[0] + " ";
                this.unlock();
            } else if (possibilities.length > 1) {
                this.type(possibilities.join("\n"), function () {
                    this.cmdLine.value = cmdComponents.join(" ");
                    this.unlock();
                }.bind(this));
            } else {
                this.cmdLine.value = cmdComponents.join(" ");
                this.unlock();
            }
        }
    };

    Terminal.prototype.handleCmd = function () {
        var cmdComponents = this.cmdLine.value.trim().split(" ");
        this.lock();
        switch (cmdComponents[0]) {
            case cmds.CAT.value:
                this.cat(cmdComponents);
                break;
            case cmds.LS.value:
                this.ls();
                break;
            case cmds.WHOAMI.value:
                this.whoami();
                break;
            case cmds.DATE.value:
                this.date();
                break;
            case cmds.HELP.value:
                this.help();
                break;
            case cmds.SETUP.value:
                this.setup();
                break;
            case cmds.CMDS.value:
                this.cmds();
                break;
            case cmds.VEHICLE.value:
                this.vehicle();
                break;
            case cmds.CLEAR.value:
                this.clear();
                break;
            case cmds.REBOOT.value:
                this.reboot();
                break;
            case cmds.CD.value:
            case cmds.MV.value:
            case cmds.RMDIR.value:
            case cmds.RM.value:
            case cmds.TOUCH.value:
                this.permissionDenied(cmdComponents);
                break;
            case cmds.SUDO.value:
                this.sudo();
                break;
            default:
                this.invalidCommand(cmdComponents);
                break;
        };
    };

    Terminal.prototype.cat = function (cmdComponents) {
        var result;
        if (cmdComponents.length <= 1) {
            result = configs.getInstance().usage + ": " + cmds.CAT.value + " <" + configs.getInstance().file + ">";
        } else if (!cmdComponents[1] || (!cmdComponents[1] === configs.getInstance().welcome_file_name && !files.getInstance().hasOwnProperty(cmdComponents[1]))) {
            result = configs.getInstance().file_not_found.replace(configs.getInstance().value_token, cmdComponents[1]);
        } else {
            result = cmdComponents[1] === configs.getInstance().welcome_file_name ? configs.getInstance().welcome : files.getInstance()[cmdComponents[1]];
        }
        this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.ls = function () {
        var result = ".\n..\n" + configs.getInstance().welcome_file_name + "\n";
        for (var file in files.getInstance()) {
            result += file + "\n";
        }
        this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.sudo = function () {
        this.type(configs.getInstance().sudo_message, this.unlock.bind(this));
    }

    Terminal.prototype.whoami = function (cmdComponents) {
        var result = configs.getInstance().username + ": " + configs.getInstance().user + "\n" + configs.getInstance().hostname + ": " + configs.getInstance().host + "\n" + configs.getInstance().platform + ": " + navigator.platform + "\n" + configs.getInstance().accesible_cores + ": " + navigator.hardwareConcurrency + "\n" + configs.getInstance().language + ": " + navigator.language;
        this.type(result, this.unlock.bind(this));
    };

    Terminal.prototype.date = function (cmdComponents) {
        this.type(new Date().toString(), this.unlock.bind(this));
    };

    Terminal.prototype.help = function () {
        var result = configs.getInstance().general_help + "\n\n";
        for (var cmd in cmds) {
            result += cmds[cmd].value + " - " + cmds[cmd].help + "\n";
        }
        this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.setup = function () {
        this.type(configs.getInstance().setup_message, this.unlock.bind(this));
    };

    /* GENERAL */
    Terminal.prototype.cmds = function () {
        var result = configs.getInstance().gtav_general_cmds_help + "\n\n";
        for (var cmd in gtav_general_cmds) {
            result += gtav_general_cmds[cmd].value + " - " + gtav_general_cmds[cmd].help + "\n";
        }
        this.type(result.trim(), this.unlock.bind(this));
    };

    /* VEHICLE */
    Terminal.prototype.vehicle = function () {
        var result = configs.getInstance().gtav_vehicle_cmds_help + "\n\n";
        for (var cmd in gtav_vehicle_cmds) {
            result += gtav_vehicle_cmds[cmd].value + " - " + gtav_vehicle_cmds[cmd].help + "\n";
        }
        this.type(result.trim(), this.unlock.bind(this));
    };

    Terminal.prototype.clear = function () {
        this.output.textContent = "";
        this.prompt.textContent = "";
        this.prompt.textContent = this.completePrompt;
        this.unlock();
    };

    Terminal.prototype.reboot = function () {
        this.type(configs.getInstance().reboot_message, this.reset.bind(this));
    };

    Terminal.prototype.reset = function () {
        this.output.textContent = "";
        this.prompt.textContent = "";
        if (this.typeSimulator) {
            this.type(configs.getInstance().welcome + (isUsingIE() ? "\n" + configs.getInstance().internet_explorer_warning : ""), function () {
                this.unlock();
            }.bind(this));
        }
    };

    Terminal.prototype.permissionDenied = function (cmdComponents) {
        this.type(configs.getInstance().permission_denied_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.invalidCommand = function (cmdComponents) {
        this.type(configs.getInstance().invalid_command_message.replace(configs.getInstance().value_token, cmdComponents[0]), this.unlock.bind(this));
    };

    Terminal.prototype.focus = function () {
        this.cmdLine.focus();
    };

    var TypeSimulator = function (timer, output) {
        var timer = parseInt(timer);
        if (timer === Number.NaN || timer < 0) {
            throw new InvalidArgumentException("Invalid value " + timer + " for argument 'timer'.");
        }
        if (!(output instanceof Node)) {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }
        this.timer = timer;
        this.output = output;
    };

    TypeSimulator.prototype.type = function (text, callback) {
        var isURL = (function () {
            return function (str) {
                return (str.startsWith("http") || str.startsWith("www")) && str.indexOf(" ") === -1 && str.indexOf("\n") === -1;
            };
        })();
        if (isURL(text)) {
            window.open(text);
        }
        var i = 0;
        var output = this.output;
        var timer = this.timer;
        var skipped = false;
        var skip = function () {
            skipped = true;
        }.bind(this);
        document.addEventListener("dblclick", skip);
        (function typer() {
            if (i < text.length) {
                var char = text.charAt(i);
                var isNewLine = char === "\n";
                output.innerHTML += isNewLine ? "<br/>" : char;
                i++;
                if (!skipped) {
                    setTimeout(typer, isNewLine ? timer * 2 : timer);
                } else {
                    output.innerHTML += (text.substring(i).replace(new RegExp("\n", 'g'), "<br/>")) + "<br/>";
                    document.removeEventListener("dblclick", skip);
                    callback();
                }
            } else if (callback) {
                output.innerHTML += "<br/>";
                document.removeEventListener("dblclick", skip);
                callback();
            }
            scrollToBottom();
        })();
    };

    return {
        listener: function () {
            new Terminal(
                document.getElementById("prompt"),
                document.getElementById("cmdline"),
                document.getElementById("output"),
                document.getElementById("sidenav"),
                document.getElementById("profilePic"),
                configs.getInstance().user,
                configs.getInstance().host,
                configs.getInstance().is_root,
                configs.getInstance().type_delay
            ).init();
        }
    };
})();

window.onload = main.listener;