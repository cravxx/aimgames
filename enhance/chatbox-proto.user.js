// ==UserScript==
// @name        Chatbox Proto
// @description (for developers)
// @namespace   notareal@em.ail
// @include     http://aimgames.forummotion.com/chatbox/*
// @version     chatbox8-0.1
// @grant       none
// @license     MIT License (Expat); opensource.org/licenses/MIT
// ==/UserScript==

// prototype implementation for the chatbox
// this allows you to extend and modify features without relying on its inner workings

// there are many other ways of doing this, but i wanted to avoid run-at document-start for this one
// so instead of preventing the original chatbox proto from loading we simply inject our own after it's done
// the downside of that is that you MUST use @grant none and it might load a teeny bit slower

// internal (added) features are prefixed with a _ (underscore)
// daily reminder that you must explicitly assign a property to `window` for it to be exported from grease to the page

var Chatbox = window.Chatbox = function(tid, params) {
  this.tid = tid;
  this.params = params;
  if (this.params == '' || this.params == undefined) {
    this.params = {
      archives: 0
    };
  }
  this.archives = this.params.archives;
  this.avatar = this.params.avatar;
  this.nolisten = !!parseInt(this.params.archives);
  this.actionsUrl = '/chatbox/actions.forum';
  this.messages = [];
  this.users = [];
  this.listenParams = {};
  //
  this._hansen = true;
};
function _cloneChatbox(base) {
  /*
  reference model:
  
  var chatbox = new Chatbox("<my secret session ID>", {
    "archives": 0,
    "avatar": 0
  });
  chatbox.userId = 2548;
  chatbox.connected = false;
  chatbox.defaultColor = '#dfdfdf';
  if (document.location.href.indexOf('chatbox', 1) == -1) {
    $('#divcolor').css('display', 'none');
    $('#divsmilies').css('display', 'none');
  }
  chatbox.init();
  */
  
  var chatbox = window.chatbox = new Chatbox(base.tid, base.params);
  chatbox.userId = base.userId;
  chatbox.connected = base.connected;
  chatbox.defaultColor = base.defaultColor;
  
  chatbox.init();
}
Chatbox.prototype.init = function(noget) {
  this.get();
  if (this.connected) {
    this.initListening();
  }
  this.format();
};
Chatbox.prototype.connect = function() {
  var data = this.params;
  data.method = 'connect';
  data.tid = this.tid;
  var self = this;
  $.ajax({
    url: this.actionsUrl,
    type: 'get',
    data: data,
    dataType: 'json',
    cache: false,
    success: function(response) {
      self.connected = response.connected;
      self.listenParams = response.listenParams;
      self.refresh(response);
      self.listen();
    }
  });
};
Chatbox.prototype.disconnect = function() {
  var self = this;
  $.ajax({
    url: this.actionsUrl,
    type: 'get',
    dataType: 'json',
    data: {
      method: 'disconnect',
      tid: this.tid
    },
    cache: false,
    success: function(response) {
      self.connected = response.connected;
      self.refresh(response);
    }
  });
};
Chatbox.prototype.initListening = function() {
  if (this.initTries >= 3) {
    this.disconnect();
  } else {
    var self = this;
    if (this.connected) {
      $.ajax({
        url: this.actionsUrl,
        type: 'get',
        dataType: 'json',
        data: {
          method: 'initListening',
          tid: this.tid,
          archives: this.archives
        },
        cache: false,
        success: function(response) {
          self.listenParams = response;
          self.listen();
        },
        error: function() {
          if (!self.initTries) {
            self.initTries = 1;
          } else {
            self.initTries++;
          }
          self.initListening();
        }
      });
    }
  }
};
Chatbox.prototype.listen = function() {
  var self = this;
  if (this.connected && !this.nolisten) {
    if (!this.listenParams.url || !this.listenParams.lastModified) {
      this.initListening();
      return;
    }
    this.listenParams.tag = Math.floor(Math.random() * 100000);
    $.ajax({
      url: this.listenParams.url,
      timeout: 35000,
      type: 'get',
      data: "tag=" + window.escape(this.listenParams.tag) + "&time=" + window.escape(this.listenParams.lastModified),
      dataType: 'text',
      crossDomain: true,
      cache: false,
      success: function(response, txt, xhr) {
        self.listenParams.lastModified = xhr.getResponseHeader('Last-Modified');
        if (response) {
          self.get();
        }
        self.listen();
      },
      error: function(xhr, status, error) {
        if (xhr.status == 403 || xhr.status == 404 || xhr.status == 0) {
          self.initListening();
        } else {
          self.disconnect();
        }
      }
    })
  }
};
Chatbox.prototype.get = function() {
  var self = this;
  $.ajax({
    url: this.actionsUrl,
    type: 'get',
    dataType: 'json',
    data: {
      method: 'get',
      tid: this.tid,
      archives: this.archives
    },
    cache: false,
    success: function(response) {
      if (response) {
        self.refresh(response);
      }
    }
  });
};
Chatbox.prototype.refresh = function(data) {
  if (data.error) {
    $("body").html(data.error);
  } else {
    if (this.connected && !this.archives) {
      $("#chatbox_footer").css('display', 'block');
      $("#chatbox_messenger_form").css('display', 'block');
      $("#chatbox_messenger_form").css('visibility', 'visible');
    } else {
      $("#chatbox_footer").css('display', 'none');
      $("#chatbox_messenger_form").css('display', 'none');
      $("#chatbox_messenger_form").css('visibility', 'hidden');
    }
    if (this.connected) {
      $("#chatbox_display_archives").show();
      $("#chatbox_option_co").hide();
      $("#chatbox_option_disco, #chatbox_footer").show();
      $(".format-message").each(function() {
        var name = $(this).attr('name');
        var value = my_getcookie('CB_' + name);
        $(this).prop('checked', parseInt(value) ? true : false);
      });
      this.format();
      if (data.lastModified) {
        this.listenParams.lastModified = data.lastModified;
      }
    } else {
      $("#chatbox_option_co").show();
      $("#chatbox_option_disco, #chatbox_footer").hide();
      $("#chatbox_display_archives").hide();
    }
    if (data.users) {
      this.users = [];
      $(".online-users, .away-users").empty();
      $(".member-title").hide();
      for (var i in data.users) {
        var user = data.users[i];
        this.users[user.id] = user;
        var username = "<span style='color:" + user.color + "'>" + (user.admin ? "@ " : "") + "<span class='chatbox-username chatbox-user-username' data-user='" + user.id + "' >" + user.username + "</span>" + "</span>";
        var list = user.online ? '.online-users' : '.away-users';
        $(list).append('<li>' + username + '</li>');
      }
      if (!$(".online-users").is(':empty')) {
        $(".member-title.online").show();
      }
      if (!$(".away-users").is(':empty')) {
        $(".member-title.away").show();
      }
    }
    if (data.messages) {
      var scroll = !this.messages || this.messages.length != data.messages.length;
      this.messages = data.messages;
      $("#chatbox").empty();
      if (this.messages) {
        var content = "";
        for (var j = 0; j < this.messages.length; j++) {
          var message = this.messages[j];
          var html = "<p class='chatbox_row_" + (j % 2 == 1 ? 2 : 1) + " clearfix'>" + "<span class='date-and-time' title='" + message.date + "'>[" + message.datetime + "]</span>";
          if (message.userId == -10) {
            html += "<span class='msg'>" + "<span style='color:" + message.msgColor + "'>" + "<strong> " + message.msg + "</strong>" + "</span>" + "</span>";
          } else {
            html += "<span class='user-msg'>";
            if (this.avatar) {
              html += "	<span class='cb-avatar'><img src='" + message.user.avatar + "' /></span>";
            }
            html += "	<span class='user' style='color:" + message.user.color + "'>" + "<strong> " + (message.user.admin ? "@ " : "") + "<span class='chatbox-username chatbox-message-username'  data-user='" + message.userId + "' >" + message.username + "</span>&nbsp;:&nbsp;" + "</strong>" + "</span>" + "<span class='msg'>" + message.msg + "</span>" + "</span>";
          }
          html += "</p>";
          content += html;
        }
        $("#chatbox").append(content);
        if (scroll) {
          $("#chatbox")[0].scrollTop = $("#chatbox").prop('scrollHeight') * 2;
        }
      }
    }
  }
};
Chatbox.prototype.send = function(params) {
  var self = this;
  if (!params) {
    params = $("form[name='post']").serialize();
  }
  var data = params + "&method=send&archives=" + this.archives;
  $("#message").val('').focus();
  $.ajax({
    url: this.actionsUrl,
    type: 'post',
    data: data,
    dataType: 'json',
    cache: false,
    success: function(response) {
      self.refresh(response);
    }
  });
};
Chatbox.prototype.format = function() {
  var input = $("#message");
  input.css('font-weight', parseInt(my_getcookie('CB_bold')) ? 'bold' : 'normal');
  input.css('font-style', parseInt(my_getcookie('CB_italic')) ? 'italic' : 'normal');
  input.css('text-decoration', (parseInt(my_getcookie('CB_underline')) ? 'underline ' : '') + (parseInt(my_getcookie('CB_strike')) ? 'line-through' : ''));
  color = my_getcookie('CB_color');
  if (color) {
    $("#scolor").val(color);
    $("#divcolor-preview").css('background-color', color);
    input.css('color', color);
  } else if (this.defaultColor) {
    $("#scolor").val(this.defaultColor);
    $("#divcolor-preview").css('background-color', this.defaultColor);
    input.css('color', this.defaultColor);
  }
};
Chatbox.unban = function(user, id) {
  $("#message").val('/unban ' + user);
  window.chatbox.send();
  $("[id='" + id + "']", this.banPopup).hide();
};
Chatbox.prototype.openHelpPage = function() {
  this.helpPopup = window.open('/chatbox/help.forum', 'help-chatbox', 'toolbar=no,menubar=no,personalbar=no,width=600,height=300,scrollbars=yes,resizable=yes');
};
Chatbox.prototype.openBanlistPage = function() {
  this.banPopup = window.open('/chatbox/banlist.forum?' + new Date().getTime(), 'banlist', 'toolbar=no,menubar=no,personalbar=no,width=450,height=300,scrollbars=yes,resizable=yes');
};
jQuery().ready(function() {
  $(".format-message").change(function() {
    var name = $(this).attr('name');
    my_setcookie('CB_' + name, $(this).is(':checked') ? 1 : 0);
    window.chatbox.format();
  });
  $("#divcolor").on('click', function(event) {
    var scrX = (event.screenX - 270);
    var scrY = (event.screenY - 270);
    window.open('/chatbox/selectcolor', 'color', 'toolbar=no,menubar=no,personalbar=no,width=250,height=200,scrollbars=no,resizable=yes,left=' + scrX + ',top=' + scrY);
  });
  $("#divsmilies").click(function(event) {
    var scrX = (event.screenX - 270);
    var scrY = (event.screenY - 380);
    window.open('/post.forum?mode=smilies', 'chatbox_smilies', 'toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left=' + scrX + ',top=' + scrY);
  });
  $("form[name='post']").submit(function() {
    var message = $("#message").val().trim();
    if (message != "") {
      switch (message) {
        case '/banlist':
          window.chatbox.openBanlistPage();
          break;
        case '/help':
          window.chatbox.openHelpPage();
          break;
        default:
          window.chatbox.send();
          break;
      }
      $("#message").val("").focus();
    } else {
      $("#message").focus();
    }
    return false;
  });
  $("body").on('click', '.chatbox-username', function(event) {
    $("#message").val($("#message").val() + $(this).text()).focus();
  });
  $("#chatbox_members").on('contextmenu', '.chatbox-user-username', function(event) {
    var userId = $(this).data('user');
    var user = chatbox.users[userId];
    var me = chatbox.users[chatbox.userId];
    showMenu(event, user, me);
    return false;
  });
});
if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^\s+/g, '').replace(/\s+$/g, '');
  }
}

_cloneChatbox(window.chatbox);
