(function(e) {
  function t(t) {
    for (
      var n, r, o = t[0], i = t[1], d = t[2], u = 0, b = [];
      u < o.length;
      u++
    )
      (r = o[u]),
        Object.prototype.hasOwnProperty.call(c, r) && c[r] && b.push(c[r][0]),
        (c[r] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    l && l(t);
    while (b.length) b.shift()();
    return s.push.apply(s, d || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], n = !0, o = 1; o < a.length; o++) {
        var i = a[o];
        0 !== c[i] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = r((r.s = a[0]))));
    }
    return e;
  }
  var n = {},
    c = { app: 0 },
    s = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var a = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function(e, t, a) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (r.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (r.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            a,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return a;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    i = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var d = 0; d < o.length; d++) t(o[d]);
  var l = i;
  s.push([0, "chunk-vendors"]), a();
})({
  0: function(e, t, a) {
    e.exports = a("56d7");
  },
  "13a7": function(e, t, a) {
    "use strict";
    a("a466");
  },
  1771: function(e, t, a) {
    var n = {
      "./arrow-send.svg": "b728",
      "./arrow.svg": "b94f",
      "./avatar.jpg": "915e",
      "./dog-image-1.jpg": "31ef",
      "./dog-image-2.jpg": "6a68",
      "./dog-image-3.jpg": "17f6",
      "./dots.svg": "4a85",
    };
    function c(e) {
      var t = s(e);
      return a(t);
    }
    function s(e) {
      if (!a.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return n[e];
    }
    (c.keys = function() {
      return Object.keys(n);
    }),
      (c.resolve = s),
      (e.exports = c),
      (c.id = "1771");
  },
  "17f6": function(e, t, a) {
    e.exports = a.p + "img/dog-image-3.c58ef7b4.jpg";
  },
  2656: function(e, t, a) {
    "use strict";
    a("9880");
  },
  "31ef": function(e, t, a) {
    e.exports = a.p + "img/dog-image-1.1b25be65.jpg";
  },
  4122: function(e, t, a) {},
  "4a85": function(e, t, a) {
    e.exports = a.p + "img/dots.cf92511d.svg";
  },
  "56d7": function(e, t, a) {
    "use strict";
    a.r(t);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var n = a("7a23"),
      c = { class: "container" },
      s = Object(n["e"])("div", { class: "purple-shape" }, null, -1),
      r = Object(n["e"])("div", { class: "low-white-shape" }, null, -1);
    function o(e, t, a, o, i, d) {
      var l = Object(n["l"])("Phone"),
        u = Object(n["l"])("Description");
      return (
        Object(n["g"])(),
        Object(n["c"])("div", c, [
          s,
          r,
          Object(n["e"])(l, { class: "scale" }),
          Object(n["e"])(u),
        ])
      );
    }
    var i = Object(n["q"])("data-v-3d93915f");
    Object(n["i"])("data-v-3d93915f");
    var d = { class: "phone" },
      l = Object(n["e"])("div", { class: "phone__top" }, null, -1),
      u = { class: "phone__screen" },
      b = { class: "content" };
    Object(n["h"])();
    var g = i(function(e, t, a, c, s, r) {
        var o = Object(n["l"])("UserTopSection"),
          i = Object(n["l"])("PhoneMessage"),
          g = Object(n["l"])("WritingZone");
        return (
          Object(n["g"])(),
          Object(n["c"])("section", d, [
            l,
            Object(n["e"])("div", u, [
              Object(n["e"])(o, { name: "Samuel Green", free: !0 }),
              Object(n["e"])("div", b, [
                (Object(n["g"])(!0),
                Object(n["c"])(
                  n["a"],
                  null,
                  Object(n["k"])(r.messages, function(e, t) {
                    return (
                      Object(n["g"])(),
                      Object(n["c"])(
                        i,
                        { data: e, index: t, key: e },
                        null,
                        8,
                        ["data", "index"]
                      )
                    );
                  }),
                  128
                )),
              ]),
              Object(n["e"])(g),
            ]),
          ])
        );
      }),
      p = Object(n["q"])("data-v-c4996424");
    Object(n["i"])("data-v-c4996424");
    var f = Object(n["e"])("div", { class: "check" }, null, -1),
      j = Object(n["e"])("div", { class: "check" }, null, -1);
    Object(n["h"])();
    var m = p(function(e, t, a, c, s, r) {
        var o = Object(n["l"])("PhoneMessagePhoto");
        return !a.data.sender && a.data.radio
          ? (Object(n["g"])(),
            Object(n["c"])(
              "div",
              {
                key: 0,
                class: "message message--not-sender message--radio ".concat(
                  a.data.class || ""
                ),
              },
              [
                Object(n["e"])(
                  "input",
                  {
                    name: "time-not-sender",
                    id: "time" + a.index,
                    type: "radio",
                  },
                  null,
                  8,
                  ["id"]
                ),
                Object(n["e"])(
                  "label",
                  { class: "radio", for: "time" + a.index },
                  Object(n["m"])(a.data.msg),
                  9,
                  ["for"]
                ),
                f,
                Object(n["e"])(
                  "p",
                  null,
                  "$" + Object(n["m"])(a.data.price),
                  1
                ),
              ],
              2
            ))
          : a.data.sender && a.data.radio
          ? (Object(n["g"])(),
            Object(n["c"])(
              "div",
              {
                key: 1,
                class: "message message--sender message--radio ".concat(
                  a.data.class || ""
                ),
              },
              [
                Object(n["e"])(
                  "input",
                  { name: "time-sender", id: "time" + a.index, type: "radio" },
                  null,
                  8,
                  ["id"]
                ),
                Object(n["e"])(
                  "label",
                  { class: "radio", for: "time" + a.index },
                  Object(n["m"])(a.data.msg),
                  9,
                  ["for"]
                ),
                j,
                Object(n["e"])(
                  "p",
                  null,
                  "$" + Object(n["m"])(a.data.price),
                  1
                ),
              ],
              2
            ))
          : a.data.imgs
          ? (Object(n["g"])(),
            Object(n["c"])(o, { key: 2, data: a.data }, null, 8, ["data"]))
          : a.data.sender
          ? a.data.sender
            ? (Object(n["g"])(),
              Object(n["c"])(
                "div",
                {
                  key: 4,
                  class: "message message--sender ".concat(a.data.class || ""),
                },
                Object(n["m"])(a.data.msg),
                3
              ))
            : Object(n["d"])("", !0)
          : (Object(n["g"])(),
            Object(n["c"])(
              "div",
              {
                key: 3,
                class: "message message--not-sender ".concat(
                  a.data.class || ""
                ),
              },
              Object(n["m"])(a.data.msg),
              3
            ));
      }),
      O = (a("99af"), Object(n["q"])("data-v-fb27684a")),
      v = O(function(e, t, c, s, r, o) {
        return (
          Object(n["g"])(),
          Object(n["c"])(
            "div",
            {
              class: "photos "
                .concat(
                  c.data.sender ? "photos--sender" : "photos--not-sender",
                  " \n      "
                )
                .concat(c.data.class || ""),
            },
            [
              (Object(n["g"])(!0),
              Object(n["c"])(
                n["a"],
                null,
                Object(n["k"])(c.data.imgs, function(e) {
                  return (
                    Object(n["g"])(),
                    Object(n["c"])(
                      "img",
                      { key: e, src: a("1771")("./" + e), alt: "" },
                      null,
                      8,
                      ["src"]
                    )
                  );
                }),
                128
              )),
            ],
            2
          )
        );
      }),
      h = { name: "PhoneMessagePhoto", props: ["data"] };
    a("caf7");
    (h.render = v), (h.__scopeId = "data-v-fb27684a");
    var y = h,
      k = {
        components: { PhoneMessagePhoto: y },
        name: "PhoneMessage",
        props: ["data", "index"],
      };
    a("fc09");
    (k.render = m), (k.__scopeId = "data-v-c4996424");
    var w = k,
      _ = a("b728"),
      x = a.n(_),
      P = Object(n["q"])("data-v-fecc6b0c");
    Object(n["i"])("data-v-fecc6b0c");
    var M = { class: "writing-zone" },
      S = Object(n["e"])(
        "img",
        { src: x.a, alt: "Click me the send a message" },
        null,
        -1
      );
    Object(n["h"])();
    var T = P(function(e, t, a, c, s, r) {
        return (
          Object(n["g"])(),
          Object(n["c"])("div", M, [
            Object(n["p"])(
              Object(n["e"])(
                "textarea",
                {
                  placeholder: "Type a message...",
                  "onUpdate:modelValue":
                    t[1] ||
                    (t[1] = function(e) {
                      return (s.msg = e);
                    }),
                },
                null,
                512
              ),
              [[n["n"], s.msg]]
            ),
            Object(n["e"])(
              "button",
              {
                class: "button-send",
                onClick:
                  t[2] ||
                  (t[2] = function() {
                    return r.addMessage && r.addMessage.apply(r, arguments);
                  }),
              },
              [S]
            ),
          ])
        );
      }),
      I = {
        name: "WritingZone",
        data: function() {
          return { msg: "" };
        },
        methods: {
          addMessage: function() {
            this.$store.commit("addMessage", this.msg);
          },
        },
      };
    a("2656");
    (I.render = T), (I.__scopeId = "data-v-fecc6b0c");
    var q = I,
      U = (a("b0c0"), a("b94f")),
      C = a.n(U),
      D = a("915e"),
      W = a.n(D),
      $ = a("4a85"),
      A = a.n($),
      Z = Object(n["q"])("data-v-0b4bf900");
    Object(n["i"])("data-v-0b4bf900");
    var B = { class: "user" },
      E = { class: "user__content" },
      G = { class: "left" },
      H = Object(n["e"])(
        "img",
        { src: C.a, alt: "Get back in the app", class: "arrow" },
        null,
        -1
      ),
      J = Object(n["e"])(
        "img",
        { class: "avatar", src: W.a, alt: "Avatar" },
        null,
        -1
      ),
      N = { class: "left__info" },
      z = { key: 0 },
      F = { key: 1 },
      L = Object(n["e"])(
        "img",
        { src: A.a, alt: "Tree dots to show more content" },
        null,
        -1
      );
    Object(n["h"])();
    var V = Z(function(e, t, a, c, s, r) {
        return (
          Object(n["g"])(),
          Object(n["c"])("header", B, [
            Object(n["e"])("div", E, [
              Object(n["e"])("div", G, [
                H,
                J,
                Object(n["e"])("div", N, [
                  Object(n["e"])("h2", null, Object(n["m"])(a.name), 1),
                  a.free
                    ? (Object(n["g"])(),
                      Object(n["c"])("p", z, "Available to Walk"))
                    : (Object(n["g"])(), Object(n["c"])("p", F, "Unavalaible")),
                ]),
              ]),
              L,
            ]),
          ])
        );
      }),
      K = { props: { name: String, free: Boolean } };
    a("13a7");
    (K.render = V), (K.__scopeId = "data-v-0b4bf900");
    var Q = K,
      R = {
        name: "Phone",
        components: {
          PhoneMessage: w,
          PhoneMessagePhoto: y,
          WritingZone: q,
          UserTopSection: Q,
        },
        computed: {
          messages: function() {
            return this.$store.state.messages;
          },
        },
      };
    a("7711");
    (R.render = g), (R.__scopeId = "data-v-3d93915f");
    var X = R,
      Y = Object(n["q"])("data-v-0907af0b");
    Object(n["i"])("data-v-0907af0b");
    var ee = { class: "description" },
      te = Object(n["e"])("h1", null, "Simple Booking", -1),
      ae = Object(n["e"])(
        "p",
        null,
        " Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat. ",
        -1
      );
    Object(n["h"])();
    var ne = Y(function(e, t, a, c, s, r) {
        return Object(n["g"])(), Object(n["c"])("div", ee, [te, ae]);
      }),
      ce = { name: "Description" };
    a("604b");
    (ce.render = ne), (ce.__scopeId = "data-v-0907af0b");
    var se = ce,
      re = { name: "App", components: { Phone: X, Description: se } };
    a("d49d");
    re.render = o;
    var oe = re,
      ie = a("a18c"),
      de = a.n(ie),
      le = a("5502"),
      ue = Object(le["a"])({
        state: {
          messages: [
            {
              msg: "That sounds great. I’d be happy to discuss more.",
              sender: !1,
            },
            {
              msg: "Could you send over some pictures of your dog, please?",
              sender: !1,
            },
            {
              imgs: ["dog-image-1.jpg", "dog-image-2.jpg", "dog-image-3.jpg"],
              sender: !0,
              class: "first",
            },
            { msg: "Here are a few pictures. She’s a happy girl!", sender: !0 },
            { msg: "Can you make it?", sender: !0 },
            {
              msg:
                "She looks so happy! The time we discussed works. How long shall I take her out for?",
              sender: !1,
              class: "first",
            },
            { msg: "30 minute walk", price: 29, sender: !1, radio: !0 },
            { msg: "1 hour walk", price: 49, sender: !1, radio: !0 },
          ],
        },
        mutations: {
          addMessage: function(e, t) {
            var a = { msg: t, sender: !0 };
            e.messages[e.messages.length - 1].sender !== a.sender &&
              (a.class = "first"),
              e.messages.push(a);
          },
        },
        actions: {},
        modules: {},
      });
    Object(n["b"])(oe)
      .use(ue)
      .use(de.a)
      .mount("#app");
  },
  "58c9": function(e, t, a) {},
  "604b": function(e, t, a) {
    "use strict";
    a("a14b");
  },
  "6a68": function(e, t, a) {
    e.exports = a.p + "img/dog-image-2.ad6b5f8e.jpg";
  },
  7711: function(e, t, a) {
    "use strict";
    a("58c9");
  },
  "915e": function(e, t, a) {
    e.exports = a.p + "img/avatar.83aaa0bc.jpg";
  },
  9880: function(e, t, a) {},
  a14b: function(e, t, a) {},
  a18c: function(e, t) {},
  a466: function(e, t, a) {},
  b728: function(e, t, a) {
    e.exports = a.p + "img/arrow-send.a889055b.svg";
  },
  b94f: function(e, t, a) {
    e.exports = a.p + "img/arrow.797d6f15.svg";
  },
  c63a: function(e, t, a) {},
  caf7: function(e, t, a) {
    "use strict";
    a("4122");
  },
  d49d: function(e, t, a) {
    "use strict";
    a("c63a");
  },
  f337: function(e, t, a) {},
  fc09: function(e, t, a) {
    "use strict";
    a("f337");
  },
});
//# sourceMappingURL=app.a4b863e7.js.map
