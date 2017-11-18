var GAME_LEVELS = [
  ["                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                             xxx                                                                  ",
   "                                                            xx!xx                                                                 ",
   "                                                            x!!!x                                                                 ",
   "                                                            xx!xx                                                                 ",
   "                                                             xvx                                                                  ",
   "                                                                         o        xxxxxx                                          ",
   "  xxxx                                                                                             o                       xxxx   ",
   "  x                                                                     xxxx                                                  x   ",
   "  x                                                                                          xxxxxxxx                         x   ",
   "  x                                                                              xxx                                          x   ",
   "  x                                                                                                                           x   ",
   "  x                                                 o                                                    xxx                  x   ",
   "  x                                               o   o                                                  x xxx                x   ",
   "  x                            o                                        xxxxxx                           x   xxx              x   ",
   "  x                        xxxxxxxx             xxxxxxxxx               x    x                           x     xxx        o   x   ",
   "  x    @                   x      x             x       x     o      xxxx    xxxx                   b    x       xxx          x   ",
   "  xxxxxxxxxxxx     xxxxxxxxx      x       xxxxxxx       xxxxxxxxxxxxxx          xxxxxx         xxxxxxxxxxx         xxxxxxxxxxxx   ",
   "             x  o  x              x       x                                          x         x                                  ",
   "             xxxxxxx              x!!!!!!!x                                          x!!!!!!!!!x                                  ",
   "                                  x!!!!!!!x                                          x!!!!!!!!!x                                  ",
   "                                  x!!!!!!!x                                          x!!!!!!!!!x                                  ",
   "                                  xxxxxxxxx                                          xxxxxxxxxxx                                  ",
   "                                                                                                                                  "],
  ["                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                                                              xxx                 ",
   "                 o        o        o                                                                          x!x                 ",
   "             xxxxxxxxxxxxxxxxxxxxxxxxxxx                                                                      x!x                 ",
   "             x!!!!!!!!!!!!!!!!!!!!!!!!!x      xxxxxxxxxxx                                              o      x!x                 ",
   "             x!!!!!!!!!!!!!!!!!!!!!!!!!x                                                        xxxxxxxxxxxxxxx!x                 ",
   "             x!!!!!!!!!!!!!!!!!!!!!!!!!x                                                        x!!!!!!!!!!!!!!!x                 ",
   "             x!!!!!!!!!!!!!!!!!!!!!!!!!x                    o                      xxxxxxxx     x!xxxxxxxxxxxxxxx                 ",
   "             xxxxxxxxx!!!!!!!!!xxxxxxxxx                xxxxxxxxxx                               v                                ",
   "                      x!!!!!!!x                                                                                                   ",
   "                       x!!!!!x                                            xxxxxxxxxx                                              ",
   "                        x!!!x                                                                                                     ",
   "                         xvx                                                                                           xxxx       ",
   "                                                                                                                          x       ",
   "                                          xxxx                        b                                                   x       ",
   "                                             x                    xxxxxxxxx                                               x       ",
   "                                     o       x                                                                            x       ",
   "                                   xxxx      x     xxx                          xxxxx    xxxxx       xxxxxxx              x       ",
   "      @                            x         x       x                                                     xxx            x       ",
   "    xxxxx                          x         x       x                                                                    x       ",
   "    x   x                          x       xxx       x                                                                    x       ",
   "    x   x    xxxxxx                x         x       x                                                              o     x       ",
   "    x   x    x    x                x     o   x       x                                                       xxxxxxxxxxxxxx       ",
   "    x   x    x    x                xxxx      x       x                                                   xxxxx                    ",
   "!!!!x   x!!!!x    x                          x!!!!!!!x                                               xxxxx                        ",
   "!!!!x   x!!!!x    x                       xxxx!!!!!!!x                    xxxxxxx | xxxxxx | xxxxxxxxx                            ",
   "!!!!x   x!!!!x    x      o                   x!!!!!!!x                    x!!!!!!!!!!!!!!!!!!!!!!!!!!!                            ",
   "!!!!x   x!!!!x    x w                        x!!!!!!!xxxxx     o      xxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!                            ",
   "!!!!x   x!!!!x    xxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!x     =      x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                            ",
   "!!!!x   x!!!!x                                !!!!!!!!!!!xxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                            ",
   "!!!!x   x!!!!x                                                                                                                    ",
   "!!!!x   x!!!!x                                                                                                                                  "],
  ["                                                                                                                                                ",
   "                                                                                                                                                ",
   "                                                                                                                                                ",
   "                                                                                                                                                ",
   "                                                                                                                                                ",
   "                                                                                                                                                ",
   "                                                                       o                                                                        ",
   "                                                                                                                                                ",
   "                                                                   xxxxxxxxxx                                                                   ",
   "                                                                   x                                                                            ",
   "                                                     o             x             xxxxx                                                          ",
   "                                                                   x                                                                            ",
   "                                                     x             x                                                                            ",
   "                                                     x             x                       xxx                                                  ",
   "                                                     x  w          x                      x!!!x                                                 ",
   "                                                    xxxxxxxxx      x                       xvx                                                  ",
   "                                                    x       x      x                                                                            ",
   "                                                    x       x  =   x                                   b                                        ",
   "                                                   xx       x      x                                  xxx                                       ",
   "  xxxx                                             x        x     xx                                 x!!!x                                      ",
   "  x                                                x        x      x                                  xvx                                       ",
   "  x                                                x        x      x                                                                            ",
   "  x                                               xx        x   =  x                                                                            ",
   "  x                                                x        x      x                             xxx                                            ",
   "  x                       o                        x        x      x                            x!!!x                                           ",
   "  x                 xxxxxxxxxxxxxx                 x        x      x                             xvx                                            ",
   "  x                 x!!!!!!!!!!!!x               xxx        xx     x                                                                     xxxx   ",
   "  x                 x!xxxxxxxxxxxxxxxxxx           x        x      x                                                                        x   ",
   "  x                  v                             x        x      x                   xxxxx                                                x   ",
   "  x                                        b       x        x     =x                                                                        x   ",
   "  x                                     xxxxxx     x        x      x                                                                        x   ",
   "  x                                                x        x      x           x                                                            x   ",
   "  x                                                x        x      x b                                                  xxxxxxx             x   ",
   "  x                                              xxx        x     xxxxx                                                 x     x      o      x   ",
   "  x                                           xxxx          x      x                                                xxxxx     x             x   ",
   "  x                                        xxxx             x      x                                              o x         x      x      x   ",
   "  x               xxxxxxxxx                x                x   o  x    o                                       xxxxx         x      x      x   ",
   "  x                    x  x                x                x      xxxxxxxxxxxxx               o    o           x             x!!!!!!x!!!!!!x   ",
   "  x                 o  x  xxxxxxx     xxxxxx                x                       xxxxxx     x    x     xxxxxxx             x!!!!!!x!!!!!!x   ",
   "  x    @               x        x  |  x                     x           =           x    x!!!!!x!!!!x!!!!!x                   x!!!!!!x!!!!!!x   ",
   "  xxxxxxxxxxxxxxxxxxxxxx        x!!!!!x                     xxxxxxxxxxxxxxxxxxxxxxxxx    x!!!!!x!!!!x!!!!!x                   x!!!!!!x!!!!!!x   ",
   "                                xxxxxxx                                                                                       x!!!!!!x!!!!!!x   ",
   "                                                                                                                                                "],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
  ["                                                            ",
   "  x     x               x                 x           x     ",
   "   x   x                 x               x  x         x     ",
   "    x x                   x             x             x     ",
   "     x   xxxxx  x   x      x     x     x    x  xxxxx  x     ",
   "     x   x   x  x   x       x   x x   x     x  x   x  x     ",
   "     x   x   x  x   x        x x   x x      x  x   x        ",
   "     x   xxxxx  xxxxx         x     x       x  x   x  x     ",
   "                                                            ",
   "                                                            "],   
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
