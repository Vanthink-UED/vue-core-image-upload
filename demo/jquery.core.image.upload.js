/*****
 ** a plugin for image upload
 ** view doc https://github.com/Vanthink-UED/jquery.core.image.upload
 ******/

;(function ($) {

    "use strict"; 

    var pluginName = 'coreImageUpload';

    function Plugin(element, options) {

        this.$el = $(element);
        this.options = $.extend({}, $.fn[pluginName].defaults, options);
        this.init();
    }
    
    
    // dialog for preview image and crop
    // @param files the input of type=file value
    // @param options 
    var ImageBox = function (files,options,func) {
       this.image = {
           file: files,
       }; 
       this.options = options;  
       this.uploadAction = func;
       if (files) {
            var reader = new FileReader();
            var self = this;
            reader.onload = function (e) {
                self.image.src = e.target.result;
                self.show();
            }
            
            reader.readAsDataURL(files[0]);
        }
        this.dialog = $('<div class="g-core-image-corp-container"></div>');
        this.imageAside = $('<div class="image-aside"></div>');
        this.infoAside = $('<div class="info-aside"></div>');
       // this.show();

    }

    ImageBox.prototype = {
        show: function () {
            this.dialog.append(this.imageAside, this.infoAside);
            $('body').append(this.dialog);
            //this.outputConfigInfo();
            this._initButtons();
            this._initCropBox();
            this._bind();
        },

        hide: function () {
            this.dialog.remove();
        },

        initPic: function ($container) {
            var pic = new Image();
            
            pic.src = this.image.src;
            pic.onload = (function() {
                this.image.width = pic.naturalWidth;
                this.image.height =pic.naturalHeight;
                
                this.reseyLayout(pic,$container);
                this.showCropBox($container, 'create');
                
            }).bind(this);
        },  
        reseyLayout: function(image,$container) {
            var H = window.innerHeight - 80;
            var W = window.innerWidth - 60;
            var imageWidth = this.image.width;
            var imageHeight = this.image.height;
            var R = imageWidth / imageHeight;
            var Rs = W / H;
            if (R > Rs) {
                $(image).css({
                    'width': W,
                    'height': W / R
                });
                if ($container) {
                    $container.css({
                        'width': W,
                        'height': W / R,
                        'margin-top': (H - W / R) / 2
                    });
                }
            } else {
                $(image).css({
                    'width': H * R,
                    'height': H
                });
                if ($container) {
                    $container.css({
                        'width': H * R,
                        'height': H,
                        'margin-left': (W - H * R) / 2
                    });
                }
            }
            if (!$container) {
                this.imageAside.append(image);
            } else {
                $container.append(image);
            }
            this.options.imgChangeRatio = imageWidth / image.width;
            // Options.changgedImgRatio=parseFloat(this.pic.width())/parseFloat(this.pic.height());
            //alert(Options.changgedImgRatio);
        },

        _bind: function () {
            var self = this;
            this.btnUpload.on('click', function (e) {
                 self.doCropEvent(e);
            });
            this.btnCancel.on('click', function () {
                self.dialog.remove();
            });
        },

        _initButtons: function () {
            this.btnUpload = $('<button type="button" class="btn btn-upload">确定</button>');
            this.btnCancel = $('<button type="button" class="btn btn-cancel">取消</button>');
            var $btnGroup = $('<p class="btn-groups"></p>');
            $btnGroup.append(this.btnUpload, this.btnCancel);
            this.infoAside.append($btnGroup);

        },

        setNotice: function (result) {
            this.notice = $('<div class="notice-info">' + result.errmsg + '</div>')
            if (!this.infoAside.find('notice-info').length) {
                this.infoAside.prepend(this.notice);

            } else {
                this.notice.text(result.errmsg);
            }
            if (this.response.errno) {
                this.notice.show;
            }
            if (this.response.errno == 2) {
                this.infoAside.find('.notice-info').addClass('errro');
            }
        },
        _outputImageDetails: function () {
            var $table = $('<table class="image-details"></table>');
            var htmlStr = '<tr><td>图片名称</td><td>' + this.response.data.name + '</td></tr>';
            htmlStr += '<tr><td>图片宽度</td><td>' + this.response.data.width + 'px</td></tr>';
            htmlStr += '<tr><td>图片高度</td><td>' + this.response.data.height + 'px</td></tr>';
            $table.html(htmlStr);
            var $configInfo = $('<div class="config-info"></div>');
            $configInfo.append($table);
            this.infoAside.append($configInfo);
        },


        _initCropBox: function () {
            this.imageAside.append('<div class="g-crop-image-box"><div class="g-crop-image-principal"><div></div>');
            var $principal = this.imageAside.find('.g-crop-image-principal');
            this.initPic($principal);
            
        },
        // crop
        showCropBox: function ($wrap, state) {
            var $selectCrop = $('<div class="select-recorte"></div>');
            $wrap.append($selectCrop);
            var imageWidth = parseInt($wrap.css('width'));
            var imageHeight = parseInt($wrap.css('height'));
            var ratioW = this.options.cropRatio.split(':')[0],
                ratioH = this.options.cropRatio.split(':')[1];
            var Swidth = (imageWidth / 100) * 80;
            var Sheight = (Swidth / ratioW) * ratioH;
            $selectCrop.css({
                "width": Swidth,
                "height": Sheight,
                "left": (imageWidth - Swidth) / 2,
                "top": (imageHeight - Sheight) / 2
            });
            if (Sheight > imageHeight) {
                Sheight = (imageHeight / 100) * 80;
                Swidth = (Sheight * ratioW) / ratioH;
                $selectCrop.css({
                    "width": Swidth,
                    "height": Sheight,
                    "left": (imageWidth - Swidth) / 2,
                    "top": (imageHeight - Sheight) / 2
                });
            };
            if (state == "create") {

                var me = this;

                $selectCrop.resizable({
                    containment: "parent",
                    aspectRatio: this.options.cropRatio,
                    minWidth: (Swidth / 100) * 10,
                    minHeight: (Sheight / 100) * 10,
                    resize: function (e) {
                        var ui = $(e.target);
                        var x = ui.css('left');
                        var y = ui.css('top');
                        var w = ui.width();
                        var h = ui.height();

                    }
                });
                $selectCrop.draggable({
                    containment: "parent",
                    drag: function (e) {
                        var ui = $(e.target);
                        var x = ui.css('left');
                        var y = ui.css('top');
                        var w = ui.width();
                        var h = ui.height();
                    }
                });
                $('body>div').bind("dragstart", function(event, ui){
                    event.stopPropagation();
                });

            };


        },

        doCropEvent: function (e) {
            var thisBtn = $(e.target);
            thisBtn.attr("disabled", "disabled");

            thisBtn.text('裁剪中...');

            var $selectCrop = this.dialog.find('.select-recorte');
            var ratioW = this.options.cropRatio.split(':')[0];
            var ratioH = this.options.cropRatio.split(':')[1];
            // 带入新的值
            var data = {};
            data["request"] = "crop";
            data["toCropImgX"] = parseInt($selectCrop.css('left')) * this.options.imgChangeRatio;
            data["toCropImgY"] = parseInt($selectCrop.css('top')) * this.options.imgChangeRatio;
            data["toCropImgW"] = $selectCrop.width() * this.options.imgChangeRatio;
            data["toCropImgH"] = $selectCrop.height() * this.options.imgChangeRatio;
            data["maxWidth"] = $(".maxWidthHeight input[name='maxwidth']").val();
            data["maxHeight"] = $(".maxWidthHeight input[name='maxheight']").val();
            data["ratioW"] = ratioW;
            data["ratioH"] = ratioH;
            var me = this;
            this.options.data = $.extend(this.options.data,data);
            this.uploadAction();
            
        }
    };
    
    
    
    var methods = {
        clear: function (Options) {
           
        },
        init: function () {
            
            var Options = this.options;
 
           if (Options.url == "") {
                return alert('options.url must be defined');
            }
        

            //  Options.DefaultImageButton = (Options.DefaultImageButton == "") ? Options.PluginFolderOnServer + OptionsIfEmpty.DefaultImageButton : Options.DefaultImageButton;
            if (Options.inputOfFile == "") {
                return alert('options.inputOfFile must be defined');
            }
            var initUpload = function (element) {
                element.css({
                    "cursor": "pointer",
                    "overflow": "hidden"
                }).addClass("g-core-image-upload-element");
                // support drage
                element.on('dragenter', function (e) {
                    if ($(e.target).attr("name") == Options.inputOfFile) {
                        element.addClass("picture-dropped")
                    } else {
                        element.removeClass("picture-dropped")
                    };
                    e.stopPropagation();
                    e.preventDefault()
                });
                $(document).on('drop dragend', function (e) {
                    element.removeClass("picture-dropped");
                    e.stopPropagation()
                });
                element.on("mouseout", function (e) {
                    element.removeClass("picture-dropped");
                    e.stopPropagation()
                });

                var $inputHidden = $("<input type='hidden' name='" + Options.InputOfImageDirectory + "' id='" + Options.InputOfImageDirectory + "'>");
                $inputHidden.addClass("picture-element-image-directory");
                element.append($inputHidden);
                //$inputHidden.attr(Options.InputOfImageDirectoryAttr);
            };
            var getExt = function (name) {
                return name.slice(name.lastIndexOf(".") + 1);
            };
            var Setando_AjaxUpload = function (element) {
                var post = Options.DataPost;
                post["request"] = "upload";
                var CustomRegex = new RegExp("^(" + Options.extensions.join("|") + ")", "i");
                element.uploadAjax({
                    accept: CustomRegex,
                    acceptEx: "image/*",
                    name: Options.inputOfFile,
                    method: 'POST',
                    url: Options.actionToSubmitUpload,
                    data: post,
                    onSubmit: function () {

                        var icon_str = '<div class="core-upload-svg-icon" style="position:absolute;left:0;top:0;width:100%;height:100%;text-align:center;background-color:';
                        icon_str += element.css('background-color');
                        icon_str += ';">';
                        icon_str += '<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" style="vertical-align:middle;" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><path fill="#fff" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(293.601 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>';
                        icon_str += '上传中...</div>';
                        $loading = $(icon_str);

                        element.append($loading);
                    },
                    onComplete: function(response) {
                        $loading.remove();
                        $loading = '';
                        var response = $.parseJSON(response);
                        


                    }
                });
                element.find(":file[name='" + Options.inputOfFile + "']").mouseenter(function () {
                    element.addClass("TuyoshiImageUpload_div")
                }).mouseout(function () {
                    element.removeClass("TuyoshiImageUpload_div")
                })
            };

            



            initUpload(this.$el);
            
            this.__buildForm();
            if (Options.enableButton) {
                $enableButton = $("<input type='button' value='Selecionar imagem' />").button().css({
                    "font-size": "12px",
                    "margin-top": 5,
                    "margin-left": "-0.5px"
                });
                Elemento.after($enableButton);
                $enableButton.unbind("click").bind("click", function () {
                    Elemento.find("input[name='" + Options.inputOfFile + "']:file").click()
                });
            }
        },
        
        
        
        
        // we need build a form
        __buildForm: function() {
            var $el = this.$el;
            var options = this.options;
            $el.css("position", "relative");
            
            var htmlStr = '<form  method="post" enctype="multipart/form-data" action="' + options.url + '">';
                htmlStr += '<input name="' + options.inputOfFile + '" type="file" accept="image/*" />';
            var dataArr = [];
            if (typeof options.data === 'object') {
                for(var key in options.data) {
                    var str = '<input type="hidden" name=' + key + '> value="' + data[key] +  '"';
                    dataArr.push(str);
                }
            }
                htmlStr += dataArr.join('') + '</form>';
                
            var $form = $(htmlStr);
            var $inputUpload = $form.find('input[type="file"]');
            
            $form.css("display", "none");
       
            $form.css({
                cursor: "pointer",
                display: "block",
                position: "absolute",
                left: 0,
                top: 0,
                width: parseInt($el.css('width')) <= 0 ? $el.width() : parseInt($el.css('width')),
                height: parseInt($el.css('height')) <= 0 ? $el.height() : parseInt($el.css('height')),
                cursor: "hand",
                opacity: 0,
                margin:0,
                padding:0,
                overflow: "hidden"
            });
            $inputUpload.css({
                'width': '100%',
                'height': '100%'
            });
            var self = this;
            $inputUpload.on("change", function (e) {
                var fileVal = $inputUpload.val().replace(/C:\\fakepath\\/i, "");
                var fileExt = fileVal.substring(fileVal.lastIndexOf(".") + 1);
                if(options.extensions.length>1) {
                    var reg = new RegExp('^[' + options.extensions.join('|') + ']+$','i');
                    if (!reg.test(fileExt)) {
                        return options.extensionError();
                    }
                }
                
                
                if (e.target.files[0].size > options.maxFileSize) {
                    var formatSize;
                    if (parseInt(options.maxFileSize / 1024 / 1024) > 0) {
                        formatSize = (options.maxFileSize / 1024 / 1024).toFixed(2) + 'MB';
                    } else if (parseInt(options.maxFileSize / 1024) > 0) {
                        formatSize = (options.maxFileSize / 1024).toFixed(2) + 'kB';
                    } else {
                        formatSize = options.maxFileSize.toFixed(2) + 'Byte';
                    }
                    options.maximumSizeError;
                    return;
                }
                options.files = e.target.files;
                
                if(options.enableCrop) {
                    
                    
                    self.imageBoxObj = new ImageBox(e.target.files,options,function() {self.tryAjaxUpload($form)});
                    
                    return;
                }
                
                if(options.isAjax) {
                    self.tryAjaxUpload($form);    
                }
                $form.find("input[type=file]").attr("disabled", "disabled")
               // $form.submit();
            });
            $el.append($form);
             
            
        },
        
        tryAjaxUpload: function(form) {
            var self = this;
            var data = new FormData();
            $.each(this.options.files, function(key, value)
            {
                data.append(self.options.inputOfFile, value);
            });
            if (typeof self.options.data === 'object') { 
                $.each(this.options.data, function(key, value){
                    data.append(key, value);
                });       
                
            }
            
            $.ajax({
                url: this.options.url,
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false, 
                contentType: false, 
                success: function(data) {
                   form.find("input[type=file]").removeAttr("disabled");
                   if(self.options.enableCrop) {
                        self.imageBoxObj.hide();
                        self.imageBoxObj = null;
                   } 
                   self.options.uploadedCallback(data)
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('ERRORS: ' + textStatus);
                }
            });           
        },
        // you should pay more attention to cross domain
        tryIframeUpload: function(form) {
            f || (f = $('<iframe id="core-image-upload-iframe" name="core-image-upload-iframe"></iframe>').attr("style", 'style="width:0px;height:0px;border:0px solid #fff;"').hide(), f.attr("src", ""), $(document.body).append(f));
            var g = function () {
                form.find("input[type=file]").removeAttr("disabled");
                var d = a(this).contents().find("html body").text();
                form.get(0).reset();
                this.options.uploadedCallback(data)
                f.unbind()
            };
            form.submit(function (e) {
                f.load(g);
                form.attr("target", "core-image-upload-iframe");
                e.stopPropagation()
            })    
        }
    };

    Plugin.prototype = methods;

    $.fn[pluginName] = function(option, param) {
        return this.each(function() {
            var $this   = $(this);
            var data    = $this.data(pluginName);
            var options = typeof option == 'object' && option;
            if (!data){ 
              $this.data(pluginName, (data = new Plugin(this, options)))
            }
            if (typeof option == 'string'){
                 data[option](param);
            }
        });
    };

    
    
    $.fn[pluginName].defaults = {
        
        extensions: ['jpg', 'jpeg', 'gif', 'bmp', 'png'],
        extensionError: function() {},
        url:'',
        // upload file name
        inputOfFile: "",
        onSubmit: function() {
            
        },
        // the data you want to pass
        data: {},
        isAjax: true,
        maximumSize: 1024,
        enableMaximumSize: false,
        MaximumSizeError: function() {
            
        },   
        // crop
        enableCrop: false,
        enableResize: true,
        minimumWidthToResize: 1,
        minimumHeightToResize: 1,
        enableButton: false,
        cropRatio: '16:9',
        imgChangeRatio: '',
        uploadedCallback: function (response) {},    

    };
}(jQuery));