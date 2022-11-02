import { reactive, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import axios from 'axios';

const _sfc_main = {
  __name: "listtasks",
  __ssrInlineRender: true,
  setup(__props) {
    const tasks = reactive({
      tasks: []
    });
    const deleteTask = async (id) => {
      const TasksData = await axios.delete(`/api/posts/post`, { data: { id } });
      if (TasksData) {
        getTasks();
      }
    };
    const getTasks = async () => {
      const TasksData = await axios.post("/api/posts/list");
      tasks.tasks = TasksData.data;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "mx-auto" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          md: "12",
                          class: "text-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tasks List`);
                            } else {
                              return [
                                createTextVNode("Tasks List")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          md: "12",
                          class: "text-center",
                          "justify-center": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_table, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<thead${_scopeId5}><tr${_scopeId5}><th width="20%" align="left"${_scopeId5}>ID</th><th width="20%" align="left"${_scopeId5}>Title</th><th width="20%" align="left"${_scopeId5}>Description</th><th width="20%" align="left"${_scopeId5}>Status</th><th width="20%" align="left"${_scopeId5}>Action</th></tr></thead><tbody${_scopeId5}><!--[-->`);
                                    ssrRenderList(tasks.tasks, (task) => {
                                      _push6(`<tr${_scopeId5}><td width="20%" align="left"${_scopeId5}>${ssrInterpolate(task.id)}</td><td width="20%" align="left"${_scopeId5}>${ssrInterpolate(task.name)}</td><td width="20%" align="left"${_scopeId5}>${ssrInterpolate(task.description)}</td><td width="20%" align="left"${_scopeId5}>${ssrInterpolate(task.status)}</td><td width="20%" align="left"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        depressed: "",
                                        color: "success",
                                        onClick: ($event) => this.$router.push(`edit-task/${task.id}`)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_icon, {
                                              large: "",
                                              color: "darken-2"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` mdi-pencil `);
                                                } else {
                                                  return [
                                                    createTextVNode(" mdi-pencil ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_icon, {
                                                large: "",
                                                color: "darken-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-pencil ")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        depressed: "",
                                        color: "error ml-2",
                                        onClick: ($event) => deleteTask(task.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_icon, {
                                              large: "",
                                              color: "darken-2"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` mdi-delete `);
                                                } else {
                                                  return [
                                                    createTextVNode(" mdi-delete ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_icon, {
                                                large: "",
                                                color: "darken-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-delete ")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</td></tr>`);
                                    });
                                    _push6(`<!--]--></tbody>`);
                                  } else {
                                    return [
                                      createVNode("thead", null, [
                                        createVNode("tr", null, [
                                          createVNode("th", {
                                            width: "20%",
                                            align: "left"
                                          }, "ID"),
                                          createVNode("th", {
                                            width: "20%",
                                            align: "left"
                                          }, "Title"),
                                          createVNode("th", {
                                            width: "20%",
                                            align: "left"
                                          }, "Description"),
                                          createVNode("th", {
                                            width: "20%",
                                            align: "left"
                                          }, "Status"),
                                          createVNode("th", {
                                            width: "20%",
                                            align: "left"
                                          }, "Action")
                                        ])
                                      ]),
                                      createVNode("tbody", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(tasks.tasks, (task) => {
                                          return openBlock(), createBlock("tr", {
                                            key: task.id
                                          }, [
                                            createVNode("td", {
                                              width: "20%",
                                              align: "left"
                                            }, toDisplayString(task.id), 1),
                                            createVNode("td", {
                                              width: "20%",
                                              align: "left"
                                            }, toDisplayString(task.name), 1),
                                            createVNode("td", {
                                              width: "20%",
                                              align: "left"
                                            }, toDisplayString(task.description), 1),
                                            createVNode("td", {
                                              width: "20%",
                                              align: "left"
                                            }, toDisplayString(task.status), 1),
                                            createVNode("td", {
                                              width: "20%",
                                              align: "left"
                                            }, [
                                              createVNode(_component_v_btn, {
                                                depressed: "",
                                                color: "success",
                                                onClick: ($event) => this.$router.push(`edit-task/${task.id}`)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, {
                                                    large: "",
                                                    color: "darken-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" mdi-pencil ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]),
                                              createVNode(_component_v_btn, {
                                                depressed: "",
                                                color: "error ml-2",
                                                onClick: ($event) => deleteTask(task.id)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, {
                                                    large: "",
                                                    color: "darken-2"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" mdi-delete ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"])
                                            ])
                                          ]);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_table, null, {
                                  default: withCtx(() => [
                                    createVNode("thead", null, [
                                      createVNode("tr", null, [
                                        createVNode("th", {
                                          width: "20%",
                                          align: "left"
                                        }, "ID"),
                                        createVNode("th", {
                                          width: "20%",
                                          align: "left"
                                        }, "Title"),
                                        createVNode("th", {
                                          width: "20%",
                                          align: "left"
                                        }, "Description"),
                                        createVNode("th", {
                                          width: "20%",
                                          align: "left"
                                        }, "Status"),
                                        createVNode("th", {
                                          width: "20%",
                                          align: "left"
                                        }, "Action")
                                      ])
                                    ]),
                                    createVNode("tbody", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(tasks.tasks, (task) => {
                                        return openBlock(), createBlock("tr", {
                                          key: task.id
                                        }, [
                                          createVNode("td", {
                                            width: "20%",
                                            align: "left"
                                          }, toDisplayString(task.id), 1),
                                          createVNode("td", {
                                            width: "20%",
                                            align: "left"
                                          }, toDisplayString(task.name), 1),
                                          createVNode("td", {
                                            width: "20%",
                                            align: "left"
                                          }, toDisplayString(task.description), 1),
                                          createVNode("td", {
                                            width: "20%",
                                            align: "left"
                                          }, toDisplayString(task.status), 1),
                                          createVNode("td", {
                                            width: "20%",
                                            align: "left"
                                          }, [
                                            createVNode(_component_v_btn, {
                                              depressed: "",
                                              color: "success",
                                              onClick: ($event) => this.$router.push(`edit-task/${task.id}`)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, {
                                                  large: "",
                                                  color: "darken-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-pencil ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(_component_v_btn, {
                                              depressed: "",
                                              color: "error ml-2",
                                              onClick: ($event) => deleteTask(task.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, {
                                                  large: "",
                                                  color: "darken-2"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi-delete ")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ])
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            md: "12",
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Tasks List")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            md: "12",
                            class: "text-center",
                            "justify-center": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_table, null, {
                                default: withCtx(() => [
                                  createVNode("thead", null, [
                                    createVNode("tr", null, [
                                      createVNode("th", {
                                        width: "20%",
                                        align: "left"
                                      }, "ID"),
                                      createVNode("th", {
                                        width: "20%",
                                        align: "left"
                                      }, "Title"),
                                      createVNode("th", {
                                        width: "20%",
                                        align: "left"
                                      }, "Description"),
                                      createVNode("th", {
                                        width: "20%",
                                        align: "left"
                                      }, "Status"),
                                      createVNode("th", {
                                        width: "20%",
                                        align: "left"
                                      }, "Action")
                                    ])
                                  ]),
                                  createVNode("tbody", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(tasks.tasks, (task) => {
                                      return openBlock(), createBlock("tr", {
                                        key: task.id
                                      }, [
                                        createVNode("td", {
                                          width: "20%",
                                          align: "left"
                                        }, toDisplayString(task.id), 1),
                                        createVNode("td", {
                                          width: "20%",
                                          align: "left"
                                        }, toDisplayString(task.name), 1),
                                        createVNode("td", {
                                          width: "20%",
                                          align: "left"
                                        }, toDisplayString(task.description), 1),
                                        createVNode("td", {
                                          width: "20%",
                                          align: "left"
                                        }, toDisplayString(task.status), 1),
                                        createVNode("td", {
                                          width: "20%",
                                          align: "left"
                                        }, [
                                          createVNode(_component_v_btn, {
                                            depressed: "",
                                            color: "success",
                                            onClick: ($event) => this.$router.push(`edit-task/${task.id}`)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, {
                                                large: "",
                                                color: "darken-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-pencil ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_v_btn, {
                                            depressed: "",
                                            color: "error ml-2",
                                            onClick: ($event) => deleteTask(task.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, {
                                                large: "",
                                                color: "darken-2"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" mdi-delete ")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ])
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          md: "12",
                          class: "text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Tasks List")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          md: "12",
                          class: "text-center",
                          "justify-center": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_table, null, {
                              default: withCtx(() => [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", {
                                      width: "20%",
                                      align: "left"
                                    }, "ID"),
                                    createVNode("th", {
                                      width: "20%",
                                      align: "left"
                                    }, "Title"),
                                    createVNode("th", {
                                      width: "20%",
                                      align: "left"
                                    }, "Description"),
                                    createVNode("th", {
                                      width: "20%",
                                      align: "left"
                                    }, "Status"),
                                    createVNode("th", {
                                      width: "20%",
                                      align: "left"
                                    }, "Action")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(tasks.tasks, (task) => {
                                    return openBlock(), createBlock("tr", {
                                      key: task.id
                                    }, [
                                      createVNode("td", {
                                        width: "20%",
                                        align: "left"
                                      }, toDisplayString(task.id), 1),
                                      createVNode("td", {
                                        width: "20%",
                                        align: "left"
                                      }, toDisplayString(task.name), 1),
                                      createVNode("td", {
                                        width: "20%",
                                        align: "left"
                                      }, toDisplayString(task.description), 1),
                                      createVNode("td", {
                                        width: "20%",
                                        align: "left"
                                      }, toDisplayString(task.status), 1),
                                      createVNode("td", {
                                        width: "20%",
                                        align: "left"
                                      }, [
                                        createVNode(_component_v_btn, {
                                          depressed: "",
                                          color: "success",
                                          onClick: ($event) => this.$router.push(`edit-task/${task.id}`)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              large: "",
                                              color: "darken-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-pencil ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(_component_v_btn, {
                                          depressed: "",
                                          color: "error ml-2",
                                          onClick: ($event) => deleteTask(task.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              large: "",
                                              color: "darken-2"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi-delete ")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_title, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        md: "12",
                        class: "text-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Tasks List")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        md: "12",
                        class: "text-center",
                        "justify-center": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_table, null, {
                            default: withCtx(() => [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    width: "20%",
                                    align: "left"
                                  }, "ID"),
                                  createVNode("th", {
                                    width: "20%",
                                    align: "left"
                                  }, "Title"),
                                  createVNode("th", {
                                    width: "20%",
                                    align: "left"
                                  }, "Description"),
                                  createVNode("th", {
                                    width: "20%",
                                    align: "left"
                                  }, "Status"),
                                  createVNode("th", {
                                    width: "20%",
                                    align: "left"
                                  }, "Action")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(tasks.tasks, (task) => {
                                  return openBlock(), createBlock("tr", {
                                    key: task.id
                                  }, [
                                    createVNode("td", {
                                      width: "20%",
                                      align: "left"
                                    }, toDisplayString(task.id), 1),
                                    createVNode("td", {
                                      width: "20%",
                                      align: "left"
                                    }, toDisplayString(task.name), 1),
                                    createVNode("td", {
                                      width: "20%",
                                      align: "left"
                                    }, toDisplayString(task.description), 1),
                                    createVNode("td", {
                                      width: "20%",
                                      align: "left"
                                    }, toDisplayString(task.status), 1),
                                    createVNode("td", {
                                      width: "20%",
                                      align: "left"
                                    }, [
                                      createVNode(_component_v_btn, {
                                        depressed: "",
                                        color: "success",
                                        onClick: ($event) => this.$router.push(`edit-task/${task.id}`)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, {
                                            large: "",
                                            color: "darken-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi-pencil ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_v_btn, {
                                        depressed: "",
                                        color: "error ml-2",
                                        onClick: ($event) => deleteTask(task.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, {
                                            large: "",
                                            color: "darken-2"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi-delete ")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/listtasks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=listtasks.28ea56de.mjs.map
