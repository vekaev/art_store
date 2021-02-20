(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([[0], {
    11: function (e, a, t) {
        e.exports = {
            introDesktop: "Main_introDesktop__2eA5m",
            imgPart: "Main_imgPart__VEXxn",
            imgPart_link: "Main_imgPart_link__3FyaU",
            imgPart_wrapper: "Main_imgPart_wrapper__1DSE4",
            imgPart_info: "Main_imgPart_info__3z9rT",
            textPart: "Main_textPart__wzJjb",
            textPart_date: "Main_textPart_date__32Cp2",
            info: "Main_info__19GO2",
            shop: "Main_shop__3eckE",
            shop_title: "Main_shop_title__oB2Le",
            shop_link: "Main_shop_link__Az_-0",
            shop_description: "Main_shop_description__2S0pk",
            cardList: "Main_cardList__2wJ65",
            cardList_item: "Main_cardList_item__1MMV5",
            "cardList_item-content": "Main_cardList_item-content__19s4K",
            about: "Main_about__2cHd0",
            about_link: "Main_about_link__29bJy",
            contact: "Main_contact__1jPb8",
            formPart: "Main_formPart__34C_n",
            formPart_title: "Main_formPart_title__1QwyB",
            formPart_input: "Main_formPart_input__3Qb9t",
            formPart_btn: "Main_formPart_btn__1MRbK"
        }
    }, 118: function (e, a, t) {
    }, 119: function (e, a, t) {
        "use strict";
        t.r(a);
        var n = t(0), r = t.n(n), l = t(87), c = t.n(l), i = t(19), o = t(43), m = t(15), s = t(31), u = t(28),
            d = t.n(u), p = t(88), _ = t.n(p), v = t(12), E = function (e) {
                var a = e.className, t = e.children, n = e.to;
                return r.a.createElement(v.b, {className: "".concat(d.a.UnderImgLinks, " ").concat(a), to: n}, t)
            }, y = function (e) {
                var a = e.href, t = e.className, n = e.children;
                return r.a.createElement("a", {className: "".concat(d.a.LinkWrapper, " ").concat(t), href: a}, n)
            }, f = function (e) {
                var a = e.src, t = e.alt, n = e.className, l = a;
                return r.a.createElement("img", {className: n, src: l, alt: t})
            }, g = function (e) {
                var a = e.type, t = void 0 === a ? "button" : a, n = e.name, l = void 0 === n ? "button" : n,
                    c = e.children, i = e.onClick, o = e.size, m = void 0 === o ? "small" : o, s = e.className,
                    u = e.disabled, p = e.href;
                return p ? r.a.createElement(v.c, {
                    to: p,
                    className: "".concat(d.a.button, " ").concat(d.a["".concat(m)], "  ").concat(s)
                }, c) : r.a.createElement("button", {
                    className: "".concat(d.a.button, " ").concat(d.a["".concat(m)], " ").concat(s),
                    type: t,
                    name: l,
                    onClick: i,
                    disabled: u
                }, c)
            }, N = function (e) {
                var a = e.required, t = void 0 !== a && a, n = e.className, l = e.value, c = e.onChange, i = e.placeholder,
                    o = e.name, m = e.type, s = void 0 === m ? "text" : m, u = e.textarea;
                return void 0 !== u && u ? r.a.createElement("div", {className: "".concat(d.a.input, " ").concat(n)}, r.a.createElement("textarea", {
                    placeholder: i,
                    name: o,
                    value: l,
                    onChange: c,
                    required: t,
                    type: s
                })) : r.a.createElement("div", {className: "".concat(d.a.input, " ").concat(n)}, r.a.createElement("input", {
                    placeholder: i,
                    name: o,
                    value: l,
                    onChange: c,
                    required: t,
                    type: s
                }))
            }, h = function (e) {
                var a = e.name, t = void 0 === a ? "select" : a, n = e.optionArray, l = void 0 === n ? [] : n,
                    c = e.handleSelect, i = e.placeholder, o = void 0 === i ? "" : i, m = e.className, s = e.required,
                    u = void 0 !== s && s, p = e.defaultValue, _ = void 0 !== p && p;
                return r.a.createElement("div", {className: "".concat(m, " ").concat(d.a.select)}, r.a.createElement("select", {
                    value: _,
                    required: u,
                    placeholder: _ && o,
                    name: t,
                    onChange: c
                }, !_ && r.a.createElement("option", {
                    defaultValue: !_,
                    disabled: !0,
                    value: ""
                }, o), l.map((function (e, a) {
                    return r.a.createElement("option", {defaultValue: _ === e.value, key: a, value: e.value}, e.name)
                }))))
            }, k = function (e) {
                var a = e.href, t = e.className, n = e.children;
                return r.a.createElement(v.b, {to: a, className: "".concat(d.a.goBackBtn, " ").concat(t)}, n)
            }, b = function (e) {
                var a = e.imgArray, t = a.map((function (e) {
                    var a = e.url;
                    return {original: a, thumbnail: a}
                }));
                return r.a.createElement(_.a, {
                    additionalClass: d.a.slider,
                    useBrowserFullscreen: !1,
                    showPlayButton: !1,
                    showFullscreenButton: !1,
                    showThumbnails: (null === a || void 0 === a ? void 0 : a.length) > 1,
                    items: t
                })
            }, z = function (e) {
                var a = e.onClick, t = e.className, n = e.inCart, l = e.children;
                return n ? r.a.createElement("p", {
                    className: "".concat(d.a.AddToCartBtn, " ").concat(d.a.inCart, " ").concat(t),
                    onClick: a
                }, "dodane") : r.a.createElement(g, {
                    className: "".concat(d.a.AddToCartBtn, " ").concat(t),
                    onClick: a
                }, l || "kupuj\u0119")
            }, w = t(11), C = t.n(w), j = t(38), P = t.n(j), S = "+48 884 208 001", O = "office@viveart.org", L = "/shop",
            F = "/events", x = "/about", W = "/contact", I = "/cart", A = t(68), D = t.n(A), M = t(90), T = t(69),
            q = t(27), B = t(61);

        function R() {
            var e = Object(B.a)(["\n  query onePaintingQuery($id: ID!) {\n    painting(id: $id) {\n      id\n      name\n      price\n      depiction\n      author {\n        name\n        avatar {\n            url\n        }\n        bio\n        facebook\n        email\n        tel\n      }\n      img {\n        url\n      }\n    }\n  }\n"]);
            return R = function () {
                return e
            }, e
        }

        function K() {
            var e = Object(B.a)(["\n  query allPaintingsQuery ($start: Int, $limit: Int) {\n    paintings (start: $start, limit: $limit) {\n      id\n      name\n      price\n      author {\n        name\n      }\n      img {\n        url\n      }\n    }\n  }\n"]);
            return K = function () {
                return e
            }, e
        }

        function J() {
            var e = Object(B.a)(["\n  query allEventsQuery ($start: Int, $limit: Int) {\n    events (start: $start, limit: $limit) {\n      id\n      title \n      description\n      place\n      img {\n        url\n      }\n      date\n      canceled\n      event_type {\n        title\n      }\n    }\n  }\n"]);
            return J = function () {
                return e
            }, e
        }

        var Y = Object(q.gql)(J()), H = Object(q.gql)(K()), V = Object(q.gql)(R()), Z = r.a.createContext(),
            U = function () {
                return Object(n.useContext)(Z)
            };

        function Q(e) {
            var a = e.children, t = Object(n.useState)({cart: [], paintings: [], events: []}), l = Object(s.a)(t, 2),
                c = l[0], i = l[1], o = Object(n.useState)({fetchPaintings: !1, fetchedEvents: !1}),
                u = Object(s.a)(o, 2), d = u[0], p = (u[1], c.cart), _ = c.paintings, v = c.events,
                E = Object(q.useQuery)(H), y = Object(q.useQuery)(Y);
            Object(n.useEffect)((function () {
                var e;
                if (null === y || void 0 === y || null === (e = y.data) || void 0 === e ? void 0 : e.events) {
                    var a, t,
                        n = null === y || void 0 === y || null === (a = y.data) || void 0 === a || null === (t = a.events) || void 0 === t ? void 0 : t.slice(),
                        r = n.filter((function (e) {
                            return P()(null === e || void 0 === e ? void 0 : e.date).format("YYYYMMDD") >= P()().format("YYYYMMDD")
                        }));
                    0 === r.length && (r = n), r.sort((function (e, a) {
                        return P()(null === e || void 0 === e ? void 0 : e.date).format("YYYYMMDD") - P()(null === a || void 0 === a ? void 0 : a.date).format("YYYYMMDD")
                    })), i((function (e) {
                        return Object(m.a)(Object(m.a)({}, e), {}, {events: r})
                    }))
                }
            }), [y.data]), Object(n.useEffect)((function () {
                if ((null === E || void 0 === E ? void 0 : E.data) && (null === E || void 0 === E ? void 0 : E.data.paintings)) {
                    var e, a = (null === (e = E.data) || void 0 === e ? void 0 : e.paintings) || [], t = [];
                    if (localStorage.hasOwnProperty("cart")) {
                        var n = JSON.parse(localStorage.getItem("cart"));
                        t = n.map((function (e) {
                            return -1 !== a.findIndex((function (a) {
                                return (null === a || void 0 === a ? void 0 : a.id) === (null === e || void 0 === e ? void 0 : e.id)
                            })) ? e : null
                        })), a = a.map((function (e) {
                            return t.find((function (a) {
                                return (null === e || void 0 === e ? void 0 : e.id) === (null === a || void 0 === a ? void 0 : a.id)
                            })) ? Object(m.a)(Object(m.a)({}, e), {}, {chosen: !0}) : Object(m.a)(Object(m.a)({}, e), {}, {chosen: !1})
                        }))
                    }
                    i((function (e) {
                        return Object(m.a)(Object(m.a)({}, e), {}, {cart: t, paintings: a})
                    }))
                }
            }), [E.data]);
            var f = function (e) {
                var a = _.find((function (a) {
                    return a.id === e
                })), t = p.find((function (a) {
                    return a.id === e
                }));
                if (a && t) {
                    var n = p.filter((function (a) {
                        return a.id !== e
                    })), r = _.map((function (a) {
                        return a.id === e ? Object(m.a)(Object(m.a)({}, a), {}, {chosen: !1}) : a
                    }));
                    i((function (e) {
                        return Object(m.a)(Object(m.a)({}, e), {}, {cart: n, paintings: r})
                    })), localStorage.setItem("cart", JSON.stringify(n))
                }
            }, g = function () {
                var e = Object(M.a)(D.a.mark((function e() {
                    var a;
                    return D.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, E.fetchMore({variables: {start: _.length, limit: 10}});
                            case 2:
                                a = e.sent, a.data, setTimeout((function () {
                                    console.log(c)
                                }), 2e3);
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }();
            return r.a.createElement(Z.Provider, {
                value: {
                    cart: p,
                    paintings: _,
                    events: v,
                    removeFromCart: f,
                    addToCart: function (e) {
                        var a = _.find((function (a) {
                            return a.id === e
                        })), t = p.find((function (a) {
                            return a.id === e
                        }));
                        if (!t && a) {
                            var n = _.map((function (a) {
                                return a.id === e || t ? Object(m.a)(Object(m.a)({}, a), {}, {chosen: !0}) : a
                            }));
                            i((function (e) {
                                return Object(m.a)(Object(m.a)({}, e), {}, {
                                    cart: [].concat(Object(T.a)(p), [a]),
                                    paintings: n
                                })
                            })), localStorage.setItem("cart", JSON.stringify([].concat(Object(T.a)(p), [a])))
                        } else f(e)
                    },
                    getMorePaintings: g,
                    loadings: d
                }
            }, a)
        }

        var X = t(125), G = t(123), $ = t(124), ee = t(122);
        $.a.use([ee.a]);
        var ae = function () {
            return r.a.createElement(X.a, {
                slidesPerView: 1,
                pagination: {clickable: !0}
            }, r.a.createElement(G.a, null, "Slide 1"), r.a.createElement(G.a, null, "Slide 2"), r.a.createElement(G.a, null, "Slide 3"))
        };

        function te() {
            var e = U(), a = e.events, t = e.paintings;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(ae, null), r.a.createElement(ne, {events: a}), t.length >= 9 && r.a.createElement(re, {paintings: t}), r.a.createElement(le, null), r.a.createElement(ce, null))
        }

        var ne = r.a.memo((function (e) {
            var a, t, n = e.events, l = (void 0 === n ? [] : n)[0];
            return r.a.createElement("section", {className: C.a.introDesktop}, r.a.createElement("span", {className: C.a.imgPart}, r.a.createElement(E, {
                className: C.a.imgPart_link,
                to: F
            }, "Wydarzenia"), r.a.createElement("div", {className: C.a.imgPart_wrapper}, (null === l || void 0 === l || null === (a = l.img) || void 0 === a ? void 0 : a.url) ? r.a.createElement(f, {src: null === l || void 0 === l || null === (t = l.img) || void 0 === t ? void 0 : t.url}) : r.a.createElement("img", {src: "/img/img_hand-down.jpg"})), r.a.createElement("p", {className: C.a.imgPart_info}, "Sprawd\u017a nasz\u0105 liste wydarze\u0144 artystycznych, warsztat\xf3w i\xa0wyst\u0105pie\u0144")), r.a.createElement("div", {className: C.a.textPart}, r.a.createElement("p", {className: C.a.textPart_date}, P()(null === l || void 0 === l ? void 0 : l.date).format("DD.MM")), r.a.createElement("p", {className: C.a.info}, "Zobacz wszystkie wydazenia artystyczne kt\xf3re sie odbywaja dzisiaj")))
        })), re = r.a.memo((function (e) {
            var a = e.paintings;
            return r.a.createElement("section", {className: C.a.shop}, r.a.createElement("h2", {className: C.a.shop_title}, "Sklep"), r.a.createElement("p", {className: C.a.shop_description}, "W naszym sklepie znajdziecie prace r\xf3\u017cnych artyst\xf3w. Zar\xf3wno tych do\u015bwiadczonych, jak i tych pocz\u0105tkuj\u0105cych. Wybierajcie, podziwiajcie i kupujcie! Zyski ze sprzeda\u017cy przeznaczone s\u0105 na bie\u017c\u0105ce funkcjonowanie Fundacji a wi\u0119c kupuj\u0105c u nas wspierasz m\u0142odych artyst\xf3w! Istnieje mo\u017cliwo\u015b\u0107 zamawiania prac u ka\u017cdego artysty. Idealny i oryginalny pomys\u0142 na prezent!"), r.a.createElement("ul", {className: C.a.cardList}, a.slice(0, 12).map((function (e, a) {
                var t;
                return r.a.createElement("li", {
                    className: C.a.cardList_item,
                    key: a
                }, r.a.createElement(v.c, {
                    className: C.a["cardList_item-content"],
                    to: "/shop/".concat(e.id)
                }, r.a.createElement(f, {src: null === e || void 0 === e || null === (t = e.img[0]) || void 0 === t ? void 0 : t.url})))
            }))), r.a.createElement(g, {size: "large", className: C.a.shop_link, href: L}, "Id\u017a do sklepu"))
        })), le = r.a.memo((function () {
            return r.a.createElement("section", {className: C.a.about}, r.a.createElement("div", {className: C.a.textPart}, r.a.createElement("p", null, "Permanentn\u0105 cech\u0105 naszych czas\xf3w jest ZMIANA. ", r.a.createElement("br", null), "Zmienno\u015b\u0107 to nieustanny ruch. ", r.a.createElement("br", null), " ", r.a.createElement("br", null), "Dynamika, kt\xf3ra wyzwala dodatkowe pok\u0142ady energii. Synergii.", r.a.createElement("br", null), " ", r.a.createElement("br", null), "I tak powsta\u0142a Fundacja Vive Art \u2014 Fundacja z my\u015bl\u0105 o ludziach i ich energii. O artystach. Tych nieodkrytych i tych znanych. Wymianie my\u015bli i emocji. Odkrywaniu i wsp\xf3\u0142odczuwaniu chwil, s\u0142\xf3w, barw i d\u017awi\u0119k\xf3w.", r.a.createElement("br", null), " ", r.a.createElement("br", null), "Historyczna ulica Wroc\u0142awia \u2014 JATKI. Otwieramy nasz\u0105 przestrze\u0144 dla projekt\xf3w sztuki i kultury. \u0141\u0105czymy pokolenia, stwarzamy warunki do ekspozycji, nie definiujemy. Poszukujemy\u2026")), r.a.createElement("div", {className: C.a.imgPart}, r.a.createElement(E, {
                className: C.a.about_link,
                to: x
            }, "czym si\u0118 zajmujemy?"), r.a.createElement("img", {src: "/img/img_lobster.jpg", alt: "lobster"})))
        })), ce = r.a.memo((function () {
            var e = Object(n.useState)({name: "", tel: "", email: ""}), a = Object(s.a)(e, 2), t = a[0], l = a[1],
                c = function (e) {
                    l(Object(m.a)(Object(m.a)({}, t), {}, Object(o.a)({}, e.target.name, e.target.value)))
                };
            return r.a.createElement("section", {className: C.a.contact}, r.a.createElement("div", {className: C.a.imgPart}, r.a.createElement("img", {
                src: "/img/img_coop.jpg",
                alt: "hands"
            })), r.a.createElement("form", {className: C.a.formPart}, r.a.createElement(E, {
                className: C.a.formPart_title,
                to: W
            }, "wsp\xf3\u0142praca"), r.a.createElement(N, {
                className: C.a.formPart_input,
                placeholder: "Im\u0119 i Nazwisko",
                name: "name",
                onChange: c,
                value: t.name,
                required: !0
            }), r.a.createElement(N, {
                className: C.a.formPart_input,
                placeholder: "Numer kontaktowy",
                name: "tel",
                onChange: c,
                value: t.tel,
                required: !0
            }), r.a.createElement(N, {
                className: C.a.formPart_input,
                placeholder: "E-mail",
                name: "email",
                type: "email",
                onChange: c,
                value: t.email,
                required: !0
            }), r.a.createElement(g, {className: C.a.formPart_btn, type: "submit"}, "WY\u015aLIJ")))
        })), ie = t(16), oe = t.n(ie), me = r.a.memo((function () {
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(se, null), r.a.createElement(ue, null), r.a.createElement(de, null), r.a.createElement(pe, null))
        })), se = function () {
            return r.a.createElement("section", {className: oe.a.intro}, r.a.createElement("div", {className: " ".concat(oe.a.content, " content")}, r.a.createElement("div", {className: oe.a.textPart}, r.a.createElement("div", {className: oe.a.column}, r.a.createElement("h2", null, "Poznaj vive art"), r.a.createElement("p", null, "Dw\xf3ch do\u015bwiadczonych m\u0119\u017cczyzn stwierdzi\u0142o, \u017ce opr\xf3cz rodziny, dzieci, biznesu i szeroko rozumianej aktywno\u015bci zawodowej w \u017cyciu warto jest znale\u017a\u0107 czas, by zadzia\u0142a\u0107 spo\u0142ecznie. I tak powsta\u0142a Fundacja Vive Art - Fundacja z my\u015bl\u0105 o m\u0142odych artystach.")), r.a.createElement("div", {className: oe.a.column}, r.a.createElement("h3", null, "Nasz cel"), r.a.createElement("p", null, "Jedni pomagaj\u0105 chorym dzieciom, inni osobom starszym, a my postanowili\u015bmy p\xf3j\u015b\u0107 w kierunku rozwoju m\u0142odzie\u017cy.", r.a.createElement("br", null), r.a.createElement("br", null), "Wymy\u015blili\u015bmy jak stworzy\u0107 warunki, jakich my nigdy nie mieli\u015bmy \u2014 mo\u017ce dlatego nie zostali\u015bmy artystami")), r.a.createElement("div", {className: oe.a.column}, r.a.createElement("h3", null, "Dla czego?"), r.a.createElement("p", null, "Kontakt z m\u0142odymi lud\u017ami, pe\u0142nymi w\u0142asnych pasji i szalonych pomys\u0142\xf3w sprawia, \u017ce nasze spo\u0142ecze\u0144stwo si\u0119 bogaci i ka\u017cdy z nas odkrywa w sobie dot\u0105d nieznane pok\u0142ady wra\u017cliwo\u015bci, wzajemnego szacunku, tolerancji, kole\u017ce\u0144skich zachowa\u0144 i wiele wiele innych, kt\xf3rych nie spos\xf3b tutaj w kilku zdaniach opisa\u0107...")))))
        }, ue = function () {
            return r.a.createElement("section", {className: oe.a.cooperation}, r.a.createElement("div", {className: " ".concat(oe.a.content, " content")}, r.a.createElement("div", {className: oe.a.textPart}, r.a.createElement("div", {className: oe.a.column}, r.a.createElement("h3", null, "Proste zasady"), r.a.createElement("p", null, "Je\u017celi uwa\u017casz \u017ce jeste\u015b zabawny, potrafisz \u015bpiewa\u0107, masz w\u0142asny zesp\xf3\u0142 lub chcesz go stworzy\u0107, uwa\u017casz, \u017ce potrafisz malowa\u0107, rysowa\u0107, piszesz wiersze, tworzysz muzyk\u0119\u2026 Lub po prostu czujesz, \u017ce jeste\u015b artyst\u0105 i chcesz rozwija\u0107 swoje talenty, napisz do nas!")), r.a.createElement("div", {className: oe.a.column}, r.a.createElement("h3", null, "Jak?"), r.a.createElement("p", null, "Wiemy jak Wam pom\xf3c by\u015bcie zaistnieli na scenie, a w ka\u017cdym razie pom\xf3c zweryfikowa\u0107 Wasz potencja\u0142 artystyczny.")), r.a.createElement("div", {className: oe.a.column}, r.a.createElement("h3", null, "Zapraszamy..."), r.a.createElement("p", null, "do wsp\xf3\u0142pracy organizacje pozarz\u0105dowe, woluntariuszy, animator\xf3w kultury, artyst\xf3w, ludzi dobrej woli\u2026 wszystkich, kt\xf3rzy widz\u0105 szans\u0119 na to, by\u015bmy zrobili co\u015b razem i b\u0119dzie to korzystne spo\u0142ecznie."))), r.a.createElement("div", {className: oe.a.imgPart}, r.a.createElement(E, {
                className: oe.a.about_link,
                to: x
            }, "WSP\xd3\u0141PRACA"), r.a.createElement("img", {
                src: "/img/aboutPage/img_aboutPage-coop.jpg",
                alt: "painting"
            })), r.a.createElement("div", {className: oe.a.actionPart}, r.a.createElement("p", null, "Stworzyli\u015bmy dla Was miejsce w centrum Wroc\u0142awia aby\u015bcie swoj\u0105 kreatywno\u015bci\u0105 zaskakiwali, urzekali a nawet szokowali nie tylko polsk\u0105, ale i zagraniczn\u0105 publiczno\u015b\u0107."), r.a.createElement(g, {
                className: oe.a.link_btn,
                size: "medium",
                href: W
            }, "napisz do nas"))))
        }, de = function () {
            return r.a.createElement("section", {className: oe.a.sponsor}, r.a.createElement("div", {className: " ".concat(oe.a.content, " content")}, r.a.createElement("div", {className: oe.a.imgPart}, r.a.createElement(E, {
                className: oe.a.sponsor_link,
                to: W
            }, "Permanentnie szukamy sponsor\xf3w"), r.a.createElement("img", {
                src: "/img/aboutPage/img_aboutPage-spons.jpg",
                alt: "painting"
            }))))
        }, pe = function () {
            return r.a.createElement("section", {className: oe.a.events}, r.a.createElement("div", {className: " ".concat(oe.a.content, " content")}, r.a.createElement("div", {className: oe.a.textPart}, r.a.createElement("p", null, "Chcemy aby organizowane prze Fundacj\u0119 eventy by\u0142y otwarte na nowe formy ekspresji, rozrywki, interesuj\u0105ce zdarzenia artystyczne, dobr\u0105 rozrywk\u0119."), r.a.createElement("p", null, "Zaproponowali\u015bmy kilka sta\u0142ych punkt\xf3w, kt\xf3re b\u0119d\u0105 (mamy nadziej\u0119) na sta\u0142e wpisywa\u0107 si\u0119 w kalendarz wroc\u0142awskich wydarze\u0144 artystyczno-kulturalych."), r.a.createElement("ul", null, r.a.createElement("li", null, "Czytamy wiersze: wiersze m\u0142odych poet\xf3w czytane przez nich samych i czytanie wierszy mniej lub bardziej znanych poet\xf3w przez lektor\xf3w"), r.a.createElement("li", null, "Wiecz\xf3r francuski: recital piosenki francuskiej po francusku"), r.a.createElement("li", null, "Wieczory jazzowo-bluesowe"), r.a.createElement("li", null, "Scena wolna: Sztuki teatralne"), r.a.createElement("li", null, "Wiecz\xf3r z winylami"), r.a.createElement("li", null, "Stand up / kabaret"), r.a.createElement("li", null, "Muzyka klasyczna \u2014 koncerty"), r.a.createElement("li", null, "Wystawy prac artystycznych"), r.a.createElement("li", null, "Warsztaty tematyczne"))), r.a.createElement("div", {className: oe.a.imgPart}, r.a.createElement(E, {
                className: oe.a.events_link,
                to: W
            }, "a jakie s\u0105 Wydarzenia?"), r.a.createElement("img", {
                src: "/img/aboutPage/img_aboutPage-art.jpg",
                alt: "sculpture"
            }))))
        }, _e = t(21), ve = t.n(_e), Ee = t(94), ye = t.n(Ee), fe = function (e) {
            var a, t, n, l = e.info;
            return r.a.createElement("li", {className: ve.a.event}, r.a.createElement("div", {className: ve.a.imgWrapper}, r.a.createElement(f, {src: null === l || void 0 === l || null === (a = l.img) || void 0 === a ? void 0 : a.url})), r.a.createElement("ul", {className: ve.a.infoList}, r.a.createElement("li", null, r.a.createElement("h2", null, null === l || void 0 === l ? void 0 : l.title)), r.a.createElement("li", {className: ve.a.timeWrapper}, r.a.createElement("b", {className: ve.a.title}, "Kiedy?"), r.a.createElement("p", {className: ve.a.info}, P()(l.date).format("LL")), r.a.createElement("p", {className: ve.a.time}, P()(l.date).format("LT"))), (null === l || void 0 === l ? void 0 : l.place) && r.a.createElement("li", null, r.a.createElement("b", {className: ve.a.title}, "Gdzie?"), r.a.createElement("p", {className: ve.a.info}, null === l || void 0 === l ? void 0 : l.place)), (null === l || void 0 === l || null === (t = l.event_type) || void 0 === t ? void 0 : t.title) && r.a.createElement("li", null, r.a.createElement("b", {className: ve.a.title}, "Typ:"), r.a.createElement("p", {className: ve.a.info}, null === l || void 0 === l || null === (n = l.event_type) || void 0 === n ? void 0 : n.title)), (null === l || void 0 === l ? void 0 : l.description) && r.a.createElement("li", {className: ve.a.description}, r.a.createElement("b", {className: ve.a.title}, "Co?"), r.a.createElement(ye.a, {
                keepNewLines: !0,
                className: ve.a.info,
                anchorClass: ve.a.showMoreBtn,
                more: r.a.createElement("span", null, "Czytaj wi\u0119cej"),
                less: r.a.createElement("span", {className: ve.a.showLess}, "Czytaj mniej")
            }, null === l || void 0 === l ? void 0 : l.description))))
        };

        function ge() {
            var e = U().events;
            return r.a.createElement("ul", {className: ve.a.eventList}, null === e || void 0 === e ? void 0 : e.map((function (e, a) {
                return r.a.createElement(fe, {key: a, info: e})
            })))
        }

        var Ne = t(42), he = t.n(Ne), ke = function () {
            return r.a.createElement("li", null, "Hello")
        }, be = r.a.memo((function (e) {
            var a, t, n = e.card, l = e.addToCart;
            if (console.log(n), n) return r.a.createElement("li", {className: he.a.card}, r.a.createElement(v.b, {to: L + "/" + (null === n || void 0 === n ? void 0 : n.id)}, r.a.createElement(f, {
                className: he.a["card-img"],
                src: n.img && (null === n || void 0 === n ? void 0 : n.img[0].url)
            }), r.a.createElement("p", {className: he.a.title}, null === n || void 0 === n ? void 0 : n.name), n.author && r.a.createElement("p", {className: he.a.info}, null === n || void 0 === n || null === (a = n.author) || void 0 === a ? void 0 : a.name), n.size && r.a.createElement("b", {className: he.a.type}, null === n || void 0 === n || null === (t = n.size) || void 0 === t ? void 0 : t.title)), r.a.createElement("footer", null, r.a.createElement(z, {
                className: he.a["footer-btn"],
                inCart: n.chosen,
                onClick: function () {
                    return l(n.id)
                }
            }), n.price && r.a.createElement("p", {className: he.a["footer-price"]}, n.price, " z\u0142")))
        })), ze = function (e) {
            var a = e.data, t = e.addToCart;
            return 0 === a.length ? "Error!" : r.a.createElement(r.a.Fragment, null, r.a.createElement("ul", {className: he.a["card-list"]}, a.length > 0 ? a.map((function (e, a) {
                return r.a.createElement(be, {key: a, card: e, addToCart: t})
            })) : new Array(9).fill({}).map((function (e, a) {
                return r.a.createElement(ke, {key: a})
            }))))
        };

        function we() {
            var e = U(), a = e.paintings, t = e.addToCart;
            return r.a.createElement(ze, {data: a, addToCart: t})
        }

        var Ce = t(18), je = t.n(Ce), Pe = r.a.memo((function () {
            var e = Object(n.useState)({name: "", tel: "", email: "", purpose: ""}), a = Object(s.a)(e, 2), t = a[0],
                l = a[1], c = function (e) {
                    l(Object(m.a)(Object(m.a)({}, t), {}, Object(o.a)({}, e.target.name, e.target.value)))
                };
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("section", {className: je.a.contact}, r.a.createElement("div", {className: "  content"}, r.a.createElement("form", {
                onSubmit: function (e) {
                    e.preventDefault()
                }, className: je.a.formWrapper
            }, r.a.createElement("div", {className: je.a.imgPart}, r.a.createElement("img", {
                src: "/img/img_lobster.jpg",
                alt: "lobster"
            }), r.a.createElement(g, {
                className: je.a.formPart_btn,
                type: "submit"
            }, "WY\u015aLIJ")), r.a.createElement("div", {className: je.a.formPart}, r.a.createElement(E, {
                className: je.a.formPart_title,
                to: W
            }, "ZOSTAW SWOJE DANE Do kontaktu"), r.a.createElement("h1", null, "kotakt"), r.a.createElement(h, {
                handleSelect: c,
                className: je.a.formPart_input,
                placeholder: "Typ wsp\xf3\u0142pracy",
                name: "purpose",
                defaultValue: null === t || void 0 === t ? void 0 : t.purpose,
                optionArray: [{name: "Atrysta", value: "Atrysta"}, {name: "Sponsor", value: "Sponsor"}, {
                    name: "Inne",
                    value: "Inne"
                }]
            }), r.a.createElement(N, {
                className: je.a.formPart_input,
                placeholder: "Numer kontaktowy *",
                name: "tel",
                onChange: c,
                value: t.tel,
                required: !0
            }), r.a.createElement(N, {
                className: je.a.formPart_input,
                placeholder: "E-mail *",
                name: "email",
                type: "email",
                onChange: c,
                value: t.email,
                required: !0
            }), r.a.createElement(N, {
                className: je.a.formPart_input,
                placeholder: "Imi\u0119 i Nazwisko *",
                name: "name",
                onChange: c,
                value: t.name,
                required: !0
            }), r.a.createElement(N, {
                textarea: !0,
                className: je.a.formPart_input,
                placeholder: "Napisz swoje pytanie (100 s\u0142\xf3w)",
                name: "description",
                onChange: c,
                value: t.description
            }))))), r.a.createElement("section", {className: je.a.additional}, r.a.createElement("div", {className: " ".concat(je.a.content, " content")}, r.a.createElement("div", {className: je.a.textPart}, r.a.createElement("h2", {className: je.a.title}, "PE\u0141NE DANE KONTAKTOWE"), r.a.createElement("p", {className: je.a.descriptionText}, "Z my\u015bl\u0105 o Was Stworzyli\u015bmy miejsce w centrum Wroc\u0142awia, aby\u015bcie swoj\u0105 kreatywno\u015bci\u0105 zaskakiwali, urzekali, a nawet szokowali nie tylko polsk\u0105, ale i zagraniczn\u0105 publiczno\u015b\u0107."), r.a.createElement("img", {
                src: "/img/icon_arrow-down.svg",
                alt: "arrowDown"
            }), r.a.createElement("div", {className: je.a.links}, r.a.createElement("a", {
                className: je.a.emailLink,
                href: "mailto:".concat(O)
            }, O), r.a.createElement("a", {href: "tel:".concat(S)}, S), r.a.createElement("p", null, "ul. \u015aw. El\u017cbiety 3/4 50-111 Wroc\u0142aw"))), r.a.createElement("div", {className: je.a.imgPart}, r.a.createElement("img", {
                src: "/img/img_hand-down.jpg",
                alt: "hand down"
            }), r.a.createElement("p", {className: je.a.descriptionText}, "Wiemy jak Wam pom\xf3c by\u015bcie zaistnieli na scenie, a w ka\u017cdym razie pom\xf3c zweryfikowa\u0107 Wasz potencja\u0142 artystyczny."), r.a.createElement("p", null, "FUNDACJA VIVE ART", r.a.createElement("br", null), "KRS 0000840162,", r.a.createElement("br", {className: je.a.contactBr}), "NIP 8992879352,", r.a.createElement("br", null), " REGON 386011119")))))
        })), Se = t(4), Oe = t.n(Se), Le = function (e) {
            var a = e.step, t = void 0 === a ? 1 : a;
            return r.a.createElement("div", {className: Oe.a.CartRouteLinks}, r.a.createElement(v.c, {
                activeClassName: "".concat(Oe.a.ActiveLink),
                to: "/cart"
            }, "Koszyk"), r.a.createElement(v.c, {
                activeClassName: Oe.a.ActiveLink,
                to: "/cart/cashRegister"
            }, "Kasa"), r.a.createElement(v.c, {
                className: t >= 3 ? "" : Oe.a.DisabledLink,
                activeClassName: "".concat(Oe.a.ActiveLink),
                to: "/cart/cashRegister/summary"
            }, "Podsumowanie"), r.a.createElement(v.c, {
                className: Oe.a.DisabledLink,
                activeClassName: "".concat(Oe.a.ActiveLink),
                to: "/cart/cashRegister/summary/finish"
            }, "Koniec"))
        }, Fe = function (e) {
            var a, t, n = e.card, l = e.removeFromCart;
            return r.a.createElement("li", {className: Oe.a.cartCard}, r.a.createElement("div", {className: Oe.a.img}, r.a.createElement(f, {src: n.img && (null === n || void 0 === n || null === (a = n.img[0]) || void 0 === a ? void 0 : a.url)})), r.a.createElement("div", {className: Oe.a.infoList}, r.a.createElement("p", {className: Oe.a.Name}, null === n || void 0 === n ? void 0 : n.name), (null === n || void 0 === n ? void 0 : n.author) && r.a.createElement("p", {className: Oe.a.author}, null === n || void 0 === n || null === (t = n.author) || void 0 === t ? void 0 : t.name), (null === n || void 0 === n ? void 0 : n.price) && r.a.createElement("p", {className: Oe.a.price}, null === n || void 0 === n ? void 0 : n.price, " z\u0142")), r.a.createElement("span", {
                onClick: function () {
                    return l(n.id)
                }, className: Oe.a.crossBtn
            }))
        }, xe = function (e) {
            var a = e.data, t = e.removeFromCart;
            return r.a.createElement("div", {className: Oe.a.cartPage}, r.a.createElement("ul", {className: Oe.a.CartList}, null === a || void 0 === a ? void 0 : a.map((function (e, a) {
                return r.a.createElement(Fe, {removeFromCart: t, key: a, card: e})
            }))), r.a.createElement(We, {cart: a}))
        }, We = function (e) {
            var a = e.cart, t = void 0 === a ? [] : a, n = e.delivery, l = void 0 === n ? 0 : n, c = e.className,
                o = Object(i.i)(), m = null === t || void 0 === t ? void 0 : t.reduce((function (e, a) {
                    return e + (null === a || void 0 === a ? void 0 : a.price)
                }), 0);
            return r.a.createElement("div", null, r.a.createElement("ul", {className: "".concat(Oe.a.cartResult, " ").concat(c)}, r.a.createElement("li", null, r.a.createElement("p", {className: Oe.a.title}, "Suma"), r.a.createElement("p", {className: Oe.a.info}, m, " z\u0142")), r.a.createElement("li", null, r.a.createElement("p", {className: Oe.a.title}, "Dostawa"), r.a.createElement("p", {className: Oe.a.info}, l, " z\u0142")), r.a.createElement("li", null, r.a.createElement("b", {className: Oe.a.title}, "\u0141\u0105cznie do zap\u0142aty"), r.a.createElement("b", {className: Oe.a.info}, m + l, " z\u0142"))), r.a.createElement(g, {
                href: "".concat(o.url, "/cashRegister"),
                className: Oe.a.goToSecondStep
            }, "przejd\u017a dalej"))
        }, Ie = function (e) {
            var a = e.submittedForm, t = void 0 === a ? {} : a, l = e.setSubmittedForm, c = Object(i.f)(),
                u = Object(n.useState)({
                    role: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    tel: "",
                    city: "",
                    outdoors: "",
                    apartmentNum: "",
                    postcode: "",
                    comment: "",
                    delivery: ""
                }), d = Object(s.a)(u, 2), p = d[0], _ = d[1];
            Object(n.useEffect)((function () {
                Object.keys(t).length && _(t)
            }), [t]);
            var v = function (e) {
                _(Object(m.a)(Object(m.a)({}, p), {}, Object(o.a)({}, e.target.name, e.target.value)))
            };
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("form", {
                className: Oe.a.cartForm,
                onSubmit: function (e) {
                    e.preventDefault(), localStorage.setItem("userInfo", JSON.stringify(p)), l(p), c.push("/cart/cashRegister/summary")
                }
            }, r.a.createElement("div", {className: Oe.a.cartFormWrapper}, r.a.createElement(h, {
                handleSelect: v,
                className: Oe.a.cartFormItem,
                placeholder: "Wybierz opcj\u0119",
                name: "role",
                required: !0,
                defaultValue: null === p || void 0 === p ? void 0 : p.role,
                optionArray: [{name: "Osoba fizyczna", value: "Osoba fizyczna"}, {name: "Firma", value: "Firma"}]
            }), r.a.createElement(N, {
                className: Oe.a.cartFormItem,
                required: !0,
                placeholder: "Imi\u0119 *",
                value: p.firstName,
                name: "firstName",
                type: "text",
                onChange: v
            }), r.a.createElement(N, {
                className: Oe.a.cartFormItem,
                required: !0,
                placeholder: "Nazwisko *",
                name: "lastName",
                type: "text",
                onChange: v,
                value: p.lastName
            }), r.a.createElement(N, {
                className: Oe.a.cartFormItem,
                required: !0,
                placeholder: "E-mail *",
                name: "email",
                type: "email",
                onChange: v,
                value: p.email
            }), r.a.createElement(N, {
                className: Oe.a.cartFormItem,
                required: !0,
                placeholder: "Telefon kontaktowy *",
                name: "tel",
                type: "text",
                onChange: v,
                value: p.tel
            }), r.a.createElement(N, {
                className: Oe.a.cartFormItem,
                required: !0,
                placeholder: "Miejscowo\u015b\u0107 *",
                name: "city",
                type: "text",
                onChange: v,
                value: p.city
            }), r.a.createElement(N, {
                className: Oe.a.cartFormItem,
                required: !0,
                placeholder: "Ulica / Numer domu *",
                name: "outdoors",
                type: "text",
                onChange: v,
                value: p.outdoors
            }), r.a.createElement(N, {
                className: Oe.a.cartFormItem,
                placeholder: "Numer lokalu",
                name: "apartmentNum",
                type: "text",
                onChange: v,
                value: p.apartmentNum
            }), r.a.createElement(N, {
                required: !0,
                className: Oe.a.cartFormItem,
                placeholder: "Kod pocztowy *",
                name: "postcode",
                type: "text",
                onChange: v,
                value: p.postcode
            }), r.a.createElement(N, {
                textarea: !0,
                className: Oe.a.cartFormItem,
                placeholder: "Dodaj komentarz do zam\xf3wienia (50 s\u0142\xf3w)",
                name: "comment",
                type: "text",
                onChange: v,
                value: p.comment
            })), r.a.createElement("div", {className: Oe.a.radioBtnPart}, r.a.createElement("fieldset", null, r.a.createElement("legend", null, "Opcje Dostawy"), r.a.createElement("span", {
                style: {marginTop: 40},
                className: Oe.a.radioWrapper
            }, r.a.createElement("input", {
                checked: "Kurier / Kurier DPD" === p.delivery,
                className: Oe.a.custom,
                type: "radio",
                onChange: v,
                value: "Kurier / Kurier DPD",
                name: "delivery",
                id: "courier",
                required: !0
            }), r.a.createElement("label", {htmlFor: "courier"}, "Kurier / Kurier DPD")), r.a.createElement("span", {className: Oe.a.radioWrapper}, r.a.createElement("input", {
                checked: "Poczta Polska" === p.delivery,
                className: Oe.a.custom,
                type: "radio",
                onChange: v,
                value: "Poczta Polska",
                name: "delivery",
                id: "post"
            }), r.a.createElement("label", {htmlFor: "post"}, "Poczta Polska")), r.a.createElement("span", {className: Oe.a.radioWrapper}, r.a.createElement("input", {
                checked: "Odbi\xf3r osobisty: Solskiego 1A, Wroc\u0142aw" === p.delivery,
                className: Oe.a.custom,
                type: "radio",
                onChange: v,
                value: "Odbi\xf3r osobisty: Solskiego 1A, Wroc\u0142aw",
                name: "delivery",
                id: "office"
            }), r.a.createElement("label", {htmlFor: "office"}, "Odbi\xf3r osobisty: Solskiego 1A, Wroc\u0142aw"))), r.a.createElement(g, {
                className: Oe.a.submit,
                type: "submit"
            }, "przejd\u017a dalej"))))
        }, Ae = function (e) {
            var a = e.cart, t = e.submittedForm;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {className: Oe.a.Summary}, r.a.createElement("div", {className: Oe.a.CartSummary}, r.a.createElement("ul", null, a.map((function (e, a) {
                var t;
                return r.a.createElement("li", {
                    key: a,
                    className: Oe.a.cartCard
                }, r.a.createElement("div", {className: Oe.a.img}, r.a.createElement(f, {src: e.img[0].url})), r.a.createElement("div", {className: Oe.a.infoList}, r.a.createElement("p", {className: Oe.a.Name}, null === e || void 0 === e ? void 0 : e.name), (null === e || void 0 === e ? void 0 : e.author) && r.a.createElement("p", {className: Oe.a.author}, null === e || void 0 === e || null === (t = e.author) || void 0 === t ? void 0 : t.name), (null === e || void 0 === e ? void 0 : e.price) && r.a.createElement("p", {className: Oe.a.price}, null === e || void 0 === e ? void 0 : e.price, " z\u0142")))
            }))), r.a.createElement(We, {
                className: Oe.a.CartSummaryResult,
                cart: a
            })), r.a.createElement("div", {className: Oe.a.SummaryInfo}, r.a.createElement("h3", null, "Dane do wysy\u0142ki:"), r.a.createElement("p", {className: Oe.a.delivery}, null === t || void 0 === t ? void 0 : t.delivery), r.a.createElement("p", null, null === t || void 0 === t ? void 0 : t.firstName, " ", null === t || void 0 === t ? void 0 : t.lastName), r.a.createElement("p", null, null === t || void 0 === t ? void 0 : t.email), r.a.createElement("p", null, null === t || void 0 === t ? void 0 : t.outdoors, " ", null === t || void 0 === t ? void 0 : t.apartmentNum), r.a.createElement("p", null, null === t || void 0 === t ? void 0 : t.postcode, " | ", null === t || void 0 === t ? void 0 : t.city), r.a.createElement("p", null, "Tel: ", null === t || void 0 === t ? void 0 : t.tel))), r.a.createElement("form", {
                className: Oe.a.sendRequest,
                onSubmit: function (e) {
                    e.preventDefault()
                }
            }, r.a.createElement("input", {
                className: Oe.a.customCheckbox,
                type: "checkbox",
                id: "agreeForTerms",
                required: !0
            }), r.a.createElement("label", {htmlFor: "agreeForTerms"}, r.a.createElement("p", null, " ", "O\u015bwiadczam, \u017ce znam i akceptuj\u0119 postanowieni", r.a.createElement(v.b, {to: "/"}, " Regulaminu Sklepu Internetowego ViveArt.com"))), r.a.createElement(g, {
                type: "submit",
                className: Oe.a.sendRequestBtn
            }, "zamawiam")))
        };

        function De() {
            var e = U(), a = e.cart, t = e.removeFromCart, l = Object(n.useState)(1), c = Object(s.a)(l, 2), o = c[0],
                m = c[1], u = Object(n.useState)({}), d = Object(s.a)(u, 2), p = d[0], _ = d[1];
            return Object.keys(p).length > 0 && o < 3 && m(3), Object(n.useEffect)((function () {
                if (localStorage.hasOwnProperty("userInfo")) {
                    var e = JSON.parse(localStorage.getItem("userInfo"));
                    _(e)
                }
            }), []), 0 === a.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement("h2", {className: Oe.a.NothingTitle}, "Tw\xf3j koszyk jest pusty"), r.a.createElement(g, {href: "/shop"}, "I\u015b\u0107 do sklepu")) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Le, {step: o}), r.a.createElement(i.c, null, r.a.createElement(i.a, {
                exact: !0,
                path: "/cart",
                component: function () {
                    return r.a.createElement(xe, {removeFromCart: t, data: a})
                }
            }), a.length > 0 && r.a.createElement(i.a, {
                exact: !0, path: "/cart/cashRegister", component: function () {
                    return r.a.createElement(Ie, {submittedForm: p, setSubmittedForm: _})
                }
            }), o >= 3 && r.a.createElement(i.a, {
                exact: !0,
                path: "/cart/cashRegister/summary",
                component: function () {
                    return r.a.createElement(Ae, {cart: a, submittedForm: p})
                }
            })))
        }

        var Me = t(22), Te = t.n(Me);

        function qe() {
            var e = U(), a = e.addToCart, t = e.cart, n = Object(i.h)().pictureId,
                l = Object(q.useQuery)(V, {variables: {id: n}}), c = l.loading, o = l.error, m = l.data;
            if (c) return "Loading";
            if (!(null === m || void 0 === m ? void 0 : m.painting) || o) return "Error";
            var s = m.painting;
            return r.a.createElement(r.a.Fragment, null, r.a.createElement(Be, {
                painting: s,
                addToCart: a,
                cart: t,
                pictureId: n
            }), s.author && r.a.createElement(Re, {author: s.author}))
        }

        var Be = function (e) {
            var a = e.painting, t = e.addToCart, n = e.pictureId, l = e.cart;
            return r.a.createElement("div", {className: Te.a.painting}, r.a.createElement("div", {className: Te.a.titlePart}, r.a.createElement(k, {
                className: Te.a.goBack,
                href: L
            }, "Wr\xf3\u0107 do sklepu", r.a.createElement("span", {className: Te.a.paintingName}, a.name))), r.a.createElement("section", {className: Te.a.intro}, r.a.createElement("div", {className: Te.a.slider}, r.a.createElement("h2", {className: Te.a.title}, a.name), r.a.createElement(b, {imgArray: null === a || void 0 === a ? void 0 : a.img})), r.a.createElement("div", {className: Te.a.info}, r.a.createElement("div", {className: Te.a.pricePart}, (null === a || void 0 === a ? void 0 : a.price) && r.a.createElement("p", {className: Te.a.price}, null === a || void 0 === a ? void 0 : a.price, " z\u0142"), r.a.createElement(z, {
                inCart: null === l || void 0 === l ? void 0 : l.find((function (e) {
                    return (null === e || void 0 === e ? void 0 : e.id) === n
                })), onClick: function () {
                    return t(n)
                }
            }, "do koszyka")), r.a.createElement("p", {className: Te.a.description}, null === a || void 0 === a ? void 0 : a.depiction))))
        }, Re = function (e) {
            var a = e.author, t = a.bio, n = a.avatar, l = a.name;
            a.facebook, a.email, a.tel;
            return console.log(a, null === n || void 0 === n ? void 0 : n.url), r.a.createElement("section", {className: Te.a.author}, r.a.createElement("div", {className: Te.a.textPart}, r.a.createElement("b", null, l), r.a.createElement("p", null, t)), r.a.createElement("div", {className: Te.a.imgPart}, r.a.createElement(k, {
                className: Te.a.about_link,
                href: L
            }, "o arty\u015bcie"), r.a.createElement("div", {className: Te.a.imgWrapper}, (null === n || void 0 === n ? void 0 : n.url) ? r.a.createElement(f, {
                src: null === n || void 0 === n ? void 0 : n.url,
                alt: "avatar"
            }) : r.a.createElement("img", {src: "/img/img_lobster.jpg"}))))
        }, Ke = t(41), Je = t.n(Ke);

        function Ye() {
            var e = U().cart;
            return r.a.createElement("div", {className: Je.a.cart}, r.a.createElement("span", {className: Je.a.iconCart}), (null === e || void 0 === e ? void 0 : e.length) > 0 && r.a.createElement("p", {className: Je.a.counter}, null === e || void 0 === e ? void 0 : e.length))
        }

        var He = function (e) {
            var a = e.name, t = e.link;
            return r.a.createElement("li", {className: Je.a.link}, r.a.createElement(v.c, {
                activeClassName: "".concat(Je.a.activeLink, " ").concat(Je.a["".concat(t)]),
                to: "/".concat(t)
            }, a))
        };

        function Ve(e) {
            var a = e.includeCart, t = void 0 === a || a;
            return r.a.createElement("nav", null, r.a.createElement("ul", {className: Je.a.linkList}, r.a.createElement(He, {
                link: "events",
                name: "Wydarzenia"
            }), r.a.createElement(He, {link: "shop", name: "Sklep"}), r.a.createElement(He, {
                link: "about",
                name: "O Fundacji / Wsp\xf3\u0142praca"
            }), r.a.createElement(He, {
                link: "contact",
                name: "Kontakt"
            }), t && r.a.createElement("li", null, r.a.createElement(v.c, {to: "/cart"}, r.a.createElement(Ye, null)))))
        }

        var Ze = t(34), Ue = t.n(Ze), Qe = function (e) {
            var a = e.active, t = e.CloseAside;
            return r.a.createElement("aside", {
                onClick: t,
                className: "".concat(Ue.a.aside, " ").concat(a && Ue.a.active)
            }, r.a.createElement("div", {className: Ue.a.asideContent}, r.a.createElement(Ve, {includeCart: !1}), r.a.createElement(y, {
                className: Ue.a.AsidePhoneNumber,
                href: "tel:".concat(S)
            }, S)))
        };

        function Xe() {
            var e = Object(n.useState)(!1), a = Object(s.a)(e, 2), t = a[0], l = a[1], c = function () {
                l(!1), window.scrollTo(0, 0)
            };
            return r.a.createElement(r.a.Fragment, null, r.a.createElement("header", {className: Ue.a.header}, r.a.createElement("div", {
                style: {padding: 0},
                className: "content"
            }, r.a.createElement("div", {className: Ue.a.logoPart}, r.a.createElement("div", {
                onClick: c,
                className: Ue.a.cartLogo
            }, r.a.createElement(v.c, {to: "/cart"}, r.a.createElement(Ye, null))), r.a.createElement(v.c, {to: "/"}, r.a.createElement("span", {className: Ue.a.logoImg})), r.a.createElement("div", {
                onClick: function () {
                    l(!t)
                }, className: "\n              ".concat(Ue.a.hamburger, " \n              ").concat(Ue.a[t && "active"])
            }, r.a.createElement("span", null))), r.a.createElement("div", {className: Ue.a.divider}), r.a.createElement("div", {className: Ue.a.navPart}, r.a.createElement(Ve, null)))), r.a.createElement(Qe, {
                active: t,
                CloseAside: c
            }))
        }

        var Ge = t(23), $e = t.n(Ge), ea = function (e) {
            var a = e.name, t = e.link;
            return r.a.createElement("li", null, r.a.createElement(v.c, {
                activeClassName: "".concat($e.a.activeLink),
                to: "/".concat(t)
            }, a))
        };

        function aa() {
            return r.a.createElement("footer", {className: "content"}, r.a.createElement("ul", {className: $e.a["info-list"]}, r.a.createElement("li", {className: $e.a["info-list__item"]}, r.a.createElement("div", {className: $e.a["imp-part"]}), r.a.createElement("div", {className: $e.a["text-part"]}, r.a.createElement("ul", {className: $e.a["link-list"]}, r.a.createElement(ea, {
                link: "about",
                name: "O Fundacji"
            }), r.a.createElement(ea, {link: "events", name: "Wydarzenia"}), r.a.createElement(ea, {
                link: "shop",
                name: "Sklep"
            }), r.a.createElement(ea, {
                link: "cooperation",
                name: "Wsp\xf3\u0142praca"
            }), r.a.createElement(ea, {
                link: "contact",
                name: "Kontakt"
            })))), r.a.createElement("li", {className: $e.a["info-list__item"]}, r.a.createElement("div", {className: $e.a["imp-part"]}), r.a.createElement("div", {className: $e.a["text-part"]}, r.a.createElement("ul", {className: $e.a["link-list"]}, r.a.createElement(ea, {
                link: "webregulations",
                name: "Regulamin strony"
            }), r.a.createElement(ea, {
                link: "consumerregulations",
                name: "Regulamin konsumenta"
            }), r.a.createElement(ea, {
                link: "sponsorregulations",
                name: "Regulamin dla sponsora"
            }), r.a.createElement(ea, {
                link: "artistregulations",
                name: "Regulamin dla artysta"
            }), r.a.createElement(ea, {
                link: "privacypolicy",
                name: "Polityka prywatnosci"
            })))), r.a.createElement("li", {className: $e.a["info-list__item"]}, r.a.createElement("div", {className: $e.a["imp-part"]}), r.a.createElement("div", {className: $e.a["text-part"]}, r.a.createElement("ul", {className: $e.a["contact-list"]}, r.a.createElement("p", null, "Od poniedzia\u0142ku do pi\u0105tku:"), r.a.createElement("p", null, "od 10:00 do 17:00"), r.a.createElement("a", {href: "tel:".concat(S)}, S), r.a.createElement("a", {href: "mailto:kontakt@gallerystore.pl"}, "kontakt@gallerystore.pl"))))), r.a.createElement("div", {className: $e.a.privacy}, r.a.createElement(v.c, {
                to: "/",
                className: $e.a["img-part"]
            }), r.a.createElement("p", null, "\xa9 Wszystkie prawa autorskie naleza do Vive Art z.o.o. | \xa0", (new Date).getFullYear() || 2020)))
        }

        function ta() {
            var e = Object(i.g)().pathname;
            return Object(n.useEffect)((function () {
                window.scrollTo(0, 0)
            }), [e]), r.a.createElement(Q, null, r.a.createElement(Xe, null), r.a.createElement(i.c, null, r.a.createElement(r.a.Fragment, null, r.a.createElement("main", {className: "content"}, r.a.createElement(i.a, {
                exact: !0,
                path: "/",
                component: te
            }), r.a.createElement(i.a, {
                path: "".concat(L, "/:pictureId"),
                component: qe
            }), r.a.createElement(i.a, {exact: !0, path: L, component: we}), r.a.createElement(i.a, {
                path: I,
                component: De
            }), r.a.createElement(i.a, {exact: !0, path: F, component: ge})), r.a.createElement(i.a, {
                exact: !0,
                path: x,
                component: me
            }), r.a.createElement(i.a, {exact: !0, path: W, component: Pe}))), r.a.createElement(aa, null))
        }

        t(118);
        var na = new q.HttpLink({uri: "".concat("http://localhost:1337", "/graphql")}),
            ra = new q.ApolloClient({link: na, cache: new q.InMemoryCache});
        document.addEventListener("DOMContentLoaded", (function () {
            var e = document.getElementById("root");
            c.a.render(r.a.createElement(v.a, null, r.a.createElement(q.ApolloProvider, {client: ra}, r.a.createElement(ta, null))), e)
        }))
    }, 16: function (e, a, t) {
        e.exports = {
            column: "About_column__2SdUl",
            intro: "About_intro__mAP4q",
            textPart: "About_textPart__1k7fN",
            cooperation: "About_cooperation__3lWgF",
            content: "About_content__vPweC",
            imgPart: "About_imgPart__psuzP",
            about_link: "About_about_link__2_g9J",
            actionPart: "About_actionPart__zujUU",
            link_btn: "About_link_btn__16EOW",
            sponsor: "About_sponsor__2bXbD",
            sponsor_link: "About_sponsor_link__7I2o7",
            events: "About_events__8eXKm",
            events_link: "About_events_link__1y9m7"
        }
    }, 18: function (e, a, t) {
        e.exports = {
            contact: "Contact_contact__27ZKW",
            formWrapper: "Contact_formWrapper__A4ffB",
            imgPart: "Contact_imgPart__37hF6",
            formPart: "Contact_formPart__2G2-i",
            formPart_title: "Contact_formPart_title__2dSum",
            formPart_input: "Contact_formPart_input__2_lYj",
            formPart_btn: "Contact_formPart_btn__3pAZz",
            additional: "Contact_additional__2hjXf",
            content: "Contact_content__I-geT",
            textPart: "Contact_textPart__2kpwH",
            title: "Contact_title__3HrWq",
            descriptionText: "Contact_descriptionText__k7zFe",
            links: "Contact_links__1ZHJR",
            emailLink: "Contact_emailLink__8jzWh",
            contactBr: "Contact_contactBr__1iAEW"
        }
    }, 21: function (e, a, t) {
        e.exports = {
            eventList: "Event_eventList__2N4AB",
            event: "Event_event__8DbNk",
            imgWrapper: "Event_imgWrapper__2Jc9x",
            infoList: "Event_infoList__AMRKW",
            title: "Event_title__Gn-Rf",
            info: "Event_info__36Yse",
            time: "Event_time__1Uryr",
            timeWrapper: "Event_timeWrapper__u4Sp0",
            showMoreBtn: "Event_showMoreBtn__t2q0S",
            showLess: "Event_showLess__2nPDD"
        }
    }, 22: function (e, a, t) {
        e.exports = {
            intro: "Shop_intro__1Nz9f",
            slider: "Shop_slider__4JNDz",
            title: "Shop_title__36kn9",
            info: "Shop_info__liSMS",
            pricePart: "Shop_pricePart__UQ4CU",
            price: "Shop_price__1tHfD",
            description: "Shop_description__2CdDF",
            painting: "Shop_painting__3pqh8",
            titlePart: "Shop_titlePart__31e1Z",
            goBack: "Shop_goBack__2KxF_",
            paintingName: "Shop_paintingName__24oDq",
            author: "Shop_author__1yY2E",
            textPart: "Shop_textPart__2V1Rq",
            imgPart: "Shop_imgPart__16m1S",
            about_link: "Shop_about_link__1kF-V",
            imgWrapper: "Shop_imgWrapper__1DSVP"
        }
    }, 23: function (e, a, t) {
        e.exports = {
            "info-list": "Footer_info-list__VgPOX",
            "info-list__item": "Footer_info-list__item__1Y3uL",
            "imp-part": "Footer_imp-part__1GASg",
            "text-part": "Footer_text-part__2nox0",
            "link-list": "Footer_link-list__3bitW",
            activeLink: "Footer_activeLink__1Rlqy",
            "contact-list": "Footer_contact-list__3LT67",
            privacy: "Footer_privacy__3LnMx",
            "img-part": "Footer_img-part__3nxq3"
        }
    }, 28: function (e, a, t) {
        e.exports = {
            button: "Components_button__34h1i",
            small: "Components_small__16xFL",
            medium: "Components_medium__KBfRD",
            large: "Components_large__3-nRg",
            input: "Components_input__23P5L",
            select: "Components_select__2WYWJ",
            LinkWrapper: "Components_LinkWrapper__IY73Q",
            goBackBtn: "Components_goBackBtn__2PLr6",
            AddToCartBtn: "Components_AddToCartBtn__3el6B",
            inCart: "Components_inCart__3tXVR",
            UnderImgLinks: "Components_UnderImgLinks__3WnuC"
        }
    }, 34: function (e, a, t) {
        e.exports = {
            header: "Header_header__1v0yI",
            logoPart: "Header_logoPart__jQXQn",
            cartLogo: "Header_cartLogo__3Xd-t",
            logoImg: "Header_logoImg__2P8D2",
            hamburger: "Header_hamburger__29Z5E",
            active: "Header_active__3GX0s",
            "hamburger-menu": "Header_hamburger-menu__2vLoF",
            "bottom-block": "Header_bottom-block__30pq3",
            content: "Header_content__3z1OQ",
            divider: "Header_divider__2lhtz",
            navPart: "Header_navPart__1GcSC",
            aside: "Header_aside__12aXI",
            asideContent: "Header_asideContent__3vh3I",
            AsidePhoneNumber: "Header_AsidePhoneNumber__2G4HW"
        }
    }, 4: function (e, a, t) {
        e.exports = {
            cartPage: "Cart_cartPage__1LJ-L",
            cartResult: "Cart_cartResult__n4B4V",
            title: "Cart_title__14xTM",
            info: "Cart_info__1VboE",
            goToSecondStep: "Cart_goToSecondStep__3N6Kn",
            CartRouteLinks: "Cart_CartRouteLinks__2nlXw",
            ActiveLink: "Cart_ActiveLink__1HJVf",
            DisabledLink: "Cart_DisabledLink__pUZLp",
            NothingTitle: "Cart_NothingTitle__1lpnI",
            CartList: "Cart_CartList__1xlCC",
            cartCard: "Cart_cartCard__1XTIj",
            img: "Cart_img__1kj3e",
            infoList: "Cart_infoList__3fUkw",
            Name: "Cart_Name__fNjWa",
            author: "Cart_author__4mvga",
            price: "Cart_price__1dk8G",
            crossBtn: "Cart_crossBtn__3-adk",
            cartForm: "Cart_cartForm__b9x4O",
            cartFormWrapper: "Cart_cartFormWrapper__14pjq",
            submit: "Cart_submit__3e6DO",
            cartFormItem: "Cart_cartFormItem__3jN9f",
            radioBtnPart: "Cart_radioBtnPart__1DeTF",
            radioWrapper: "Cart_radioWrapper__3jTMM",
            custom: "Cart_custom__3BcKD",
            Summary: "Cart_Summary__WbFjt",
            CartSummary: "Cart_CartSummary__2X_x6",
            CartSummaryResult: "Cart_CartSummaryResult__1zpjW",
            SummaryInfo: "Cart_SummaryInfo__LLypw",
            delivery: "Cart_delivery__3uFJy",
            sendRequest: "Cart_sendRequest__17ilj",
            customCheckbox: "Cart_customCheckbox__3GpzO",
            sendRequestBtn: "Cart_sendRequestBtn__1EQcP"
        }
    }, 41: function (e, a, t) {
        e.exports = {
            linkList: "Navigation_linkList__2McnC",
            link: "Navigation_link__2BM9A",
            activeLink: "Navigation_activeLink__2BSDe",
            events: "Navigation_events__1efCE",
            about: "Navigation_about__3wjU8",
            shop: "Navigation_shop__3taoI",
            contact: "Navigation_contact__1ySLn",
            cart: "Navigation_cart__1RR1R",
            iconCart: "Navigation_iconCart__1BTmM",
            counter: "Navigation_counter__3XmPN"
        }
    }, 42: function (e, a, t) {
        e.exports = {
            "card-list": "PaintingsList_card-list__22y51",
            card: "PaintingsList_card__LOl5B",
            "card-img": "PaintingsList_card-img__3I72W",
            title: "PaintingsList_title__2ZPDf",
            info: "PaintingsList_info__27wuV",
            type: "PaintingsList_type__1YZKK",
            "footer-btn": "PaintingsList_footer-btn__zh9vO",
            "footer-price": "PaintingsList_footer-price__1Sg-_"
        }
    }, 95: function (e, a, t) {
        e.exports = t(119)
    }
}, [[95, 1, 2]]]);
//# sourceMappingURL=main.fa9b9d32.chunk.js.map
