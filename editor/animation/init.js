//Dont change it
requirejs(['ext_editor_1', 'jquery_190', 'raphael_210'],
    function (ext, $, TableComponent) {

        var cur_slide = {};

        ext.set_start_game(function (this_e) {
        });

        ext.set_process_in(function (this_e, data) {
            cur_slide["in"] = data[0];
        });

        ext.set_process_out(function (this_e, data) {
            cur_slide["out"] = data[0];
        });

        ext.set_process_ext(function (this_e, data) {
            cur_slide.ext = data;
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_process_err(function (this_e, data) {
            cur_slide['error'] = data[0];
            this_e.addAnimationSlide(cur_slide);
            cur_slide = {};
        });

        ext.set_animate_success_slide(function (this_e, options) {
            var $h = $(this_e.setHtmlSlide('<div class="animation-success"><div></div></div>'));
            this_e.setAnimationHeight(115);
        });

        ext.set_animate_slide(function (this_e, data, options) {
            var $content = $(this_e.setHtmlSlide(ext.get_template('animation'))).find('.animation-content');
            if (!data) {
                console.log("data is undefined");
                return false;
            }

            var checkioInput = data.in;

            if (data.error) {
                $content.find('.call').html('Fail: checkio(' + JSON.stringify(checkioInput) + ')');
                $content.find('.output').html(data.error.replace(/\n/g, ","));

                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
                $content.find('.answer').remove();
                $content.find('.explanation').remove();
                this_e.setAnimationHeight($content.height() + 60);
                return false;
            }

            var rightResult = data.ext["answer"];
            var userResult = data.out;
            var result = data.ext["result"];
            var result_addon = data.ext["result_addon"];


            //if you need additional info from tests (if exists)
            var additional = data.ext["explanation"];

            $content.find('.output').html('&nbsp;Your result:&nbsp;' + JSON.stringify(userResult));

            if (!result) {
                $content.find('.call').html('Fail: checkio(' + JSON.stringify(checkioInput) + ')');
                $content.find('.answer').html('Right result:&nbsp;' + JSON.stringify(rightResult));
                $content.find('.answer').addClass('error');
                $content.find('.output').addClass('error');
                $content.find('.call').addClass('error');
            }
            else {
                $content.find('.call').html('Pass: checkio(' + JSON.stringify(checkioInput) + ')');
                $content.find('.answer').remove();
            }
            var scale = 20;
            var zeroX = 50;
            var zeroY = 220;
            var colorBase = "#294270";

            var wall = [checkioInput[0], checkioInput[1]];
            var bullet = [checkioInput[2], checkioInput[3]];

            var canvas = createCoordinatePlane($explanation[0], zeroX, zeroY, scale, colorBase);

            //create wall
            createLine(canvas, wall[0][0] * scale + zeroX, zeroY - wall[0][1] * scale,
                wall[1][0] * scale + zeroX, zeroY - wall[1][1] * scale).attr({
                    "stroke": "#F0801A", "stroke-width": 4, "stroke-linecap": "round"});
            createLine(canvas, bullet[0][0] * scale + zeroX, zeroY - bullet[0][1] * scale,
                bullet[1][0] * scale + zeroX, zeroY - bullet[1][1] * scale).attr({
                    "stroke": "#0070AB", "stroke-width": 2, "arrow-end": "classic-wide-long"});
            canvas.circle(bullet[0][0] * scale + zeroX, zeroY - bullet[0][1] * scale, 2).attr({
                "stroke": "#0070AB", "fill": "#0070AB"
            });
            createLine(canvas, bullet[1][0] * scale + zeroX, zeroY - bullet[1][1] * scale,
                additional[0] * scale + zeroX, zeroY - additional[1] * scale).attr({
                    "stroke": "#0070AB", "stroke-width": 1, "stroke-dasharray": "-"});

            var convertedInput = '[["' + [checkio_input[0].join('","'), checkio_input[1].join('","')].join('"], ["') + '"]]';


            this_e.setAnimationHeight($content.height() + 60);

        });

        var $tryit;

        ext.set_console_process_ret(function(this_e, ret){
            $tryit.find(".checkio-result").html('Hit Wall: '+ ret);
        });

        ext.set_generate_animation_panel(function(this_e){

            $tryit = $(this_e.setHtmlTryIt(ext.get_template('tryit')));
            var scale = 20;
            var zeroX = 50;
            var zeroY = 220;
            var colorBase = "#294270";

            var tpaper = createCoordinatePlane($tryit.find(".tryit-canvas")[0], zeroX, zeroY, scale, colorBase);
            var activaEl = tpaper.rect(zeroX-scale/2, zeroY-scale*10.5, scale*11, scale*11).attr({"stroke-width": 0, "fill-opacity": 0, "fill": "#ffffff"});

            var checkioParams = [["-", "-"], ["-", "-"], ["-", "-"],["-", "-"]];

            var $points = [];
            for (var i=0; i < 4; i++) {
                var $p = $tryit.find(".point"+(i+1));
                $p.html(checkioParams[i].join(","));
                $points.push($p);
            }
            $points[0].parent().addClass("active-point");

            var countParams = 0;
            var rWall = null;
            var rBullet = null;
            var edge = null;
            var rEdge = null;
            var newPath;
            var newPathEdge;

            var createWall = function (a, b) {
                var wall = createLine(tpaper, a[0] * scale + zeroX, zeroY - a[1] * scale,
                    b[0] * scale + zeroX, zeroY - b[1] * scale).attr({
                        "stroke":"#F0801A", "stroke-width":4, "stroke-linecap":"round"});
                return wall;
            };
            var createBullet = function (a, b) {
                var bullet = createLine(tpaper, a[0] * scale + zeroX, zeroY - a[1] * scale,
                    b[0] * scale + zeroX, zeroY - b[1] * scale).attr({
                        "stroke":"#0070AB", "stroke-width":2, "stroke-linecap":"round", "arrow-end":"classic-wide-long"});
                return bullet;
            };

            var createContinue = function (a, b) {
                var cont = createLine(tpaper, a[0] * scale + zeroX, zeroY - a[1] * scale,
                    b[0] * scale + zeroX, zeroY - b[1] * scale).attr({
                        "stroke":"#0070AB", "stroke-width":1, "stroke-dasharray":"-"});
                return cont;
            };

            var createLinePath = function (xs, ys, xe, ye) {
                return "M" + (xs * scale + zeroX) + "," + (zeroY - ys * scale) + "L" + (xe * scale + zeroX) + "," + (zeroY - ye * scale);
            };

            var findEdge = function (a, b) {
                var dx = b[0] - a[0];
                var dy = b[1] - a[1];
                if (dx === 0 && dy === 0) {
                    return b;
                }
                else if (dx === 0) {
                    return b[1] > a[1] ? [a[0], 10] : [a[0], 0];
                }
                else if (dy === 0) {
                    return b[0] > a[0] ? [10, a[1]] : [0, a[1]];
                }
                var retX = function (y) {
                    return (dx / dy * (y - a[1]) + a[0]);
                };
                var retY = function (x) {
                    return (dy / dx * (x - a[0]) + a[1]);
                };
                var right = [10 , retY(10)];
                var top = [retX(10), 10];
                var left = [0 , retY(0)];
                var bottom = [retX(0), 0];
                if (dx > 0 && dy > 0) {
                    return top[0] >= right[0] ? right : top;
                }
                else if (dx > 0 && dy < 0) {
                    return bottom[0] >= right[0] ? right : bottom;
                }
                else if (dx < 0 && dy > 0) {
                    return top[0] <= left[0] ? left : top;
                }
                else {
                    return bottom[0] <= left[0] ? left : bottom;
                }

            };
            activaEl.click(function (e) {
                var point = [Math.round(((e.offsetX || e.layerX) - zeroX) / scale), Math.round((zeroY - (e.offsetY || e.layerY)) / scale)];
                checkioParams[countParams % 4] = point;
                $points[countParams % 4].parent().removeClass("active-point");
                $points[countParams % 4].html(point.join(","));

                if (countParams === 0) {
                    rWall = createWall(checkioParams[0], checkioParams[0]);
                    rWall.attr("stroke-width", 4);
                }
                else if (countParams === 2) {
                    rBullet = createLine(tpaper, point[0] * scale + zeroX, zeroY - point[1] * scale,
                        point[0] * scale + zeroX, zeroY - point[1] * scale).attr({
                            "stroke":"#0070AB", "stroke-width":4, "stroke-linecap":"round", "arrow-end":"none"});
                    rEdge = createContinue(point, point);
                }
                else if (countParams % 4 >= 2) {
                    newPath = createLinePath(checkioParams[2][0], checkioParams[2][1], checkioParams[3][0], checkioParams[3][1]);
                    rBullet.animate({"path":newPath, "stroke-width":2}, 300, callback = function () {
                        rBullet.attr("arrow-end", "classic");
                    });
                    edge = findEdge(checkioParams[2], checkioParams[3]);
                    newPathEdge = createLinePath(checkioParams[3][0], checkioParams[3][1], edge[0], edge[1]);
                    rEdge.animate({"path": newPathEdge}, 300);

                }
                else {
                    newPath = createLinePath(checkioParams[0][0], checkioParams[0][1], checkioParams[1][0], checkioParams[1][1]);
                    rWall.animate({"path":newPath}, 300);
                }
                countParams++;
                $points[countParams % 4].parent().addClass("active-point");
                if (countParams >= 4) {
                    this_e.sendToConsoleCheckiO(checkioParams);
                    e.stopPropagation();
                }
            })


        });
       

        var colorOrange4 = "#F0801A";
        var colorOrange3 = "#FA8F00";
        var colorOrange2 = "#FAA600";
        var colorOrange1 = "#FABA00";

        var colorBlue4 = "#294270";
        var colorBlue3 = "#006CA9";
        var colorBlue2 = "#65A1CF";
        var colorBlue1 = "#8FC7ED";

        var colorGrey4 = "#737370";
        var colorGrey3 = "#9D9E9E";
        var colorGrey2 = "#C5C6C6";
        var colorGrey1 = "#EBEDED";

        var colorWhite = "#FFFFFF";

        function convertListToString (input) {
            var resArray = [];
            for (var i = 0; i < input.length; i++) {
                resArray.push(input[i].join(","));
            }
            return "[[" + resArray.join("], [") + "]]";
        }

        function createLine(canvas, xs, ys, xe, ye) {
            return canvas.path("M" + xs + "," + ys + "L" + xe + "," + ye);
        }

        function createCoordinatePlane(dom, zeroX, zeroY, scale, colorBase) {
            var paper = Raphael(dom, 300, 250, 0, 0);
        //0 0 point
            paper.text(zeroX-15, zeroY+15, "0,0").attr({"font-size":12, "stroke": colorBase});
        //X Y axis
            paper.path("M" + zeroX + "," + zeroY + "H" + (zeroX + scale * 10 + 20)).attr(
                {"stroke":colorBase, "stroke-width":"2", "arrow-end":"classic-wide-long", "stroke-linecap": "round"});
            paper.path("M" + zeroX + "," + zeroY + "V" + (zeroY-scale*10-20)).attr(
                {"stroke":colorBase, "stroke-width":"2", "arrow-end":"classic-midium-long"});
        //numbers
            for (var i = 1; i < 11; i++) {
                createLine(paper, zeroX+scale*i, zeroY-2, zeroX+scale*i, zeroY+2).attr("stroke", colorBase);
                paper.text(zeroX+scale*i, zeroY+15, i).attr({"stroke": colorBase, "font-size":12});
                createLine(paper, zeroX+scale*i, zeroY-2, zeroX+scale*i, zeroY-scale*10.5).attr({
                    "stroke": "#8FC7ED", "stroke-width": 1, "stroke-dasharray": "-."
                });
                createLine(paper, zeroX-2, zeroY-scale*i, zeroX+2, zeroY-scale*i).attr("stroke", colorBase);
                paper.text(zeroX-15, zeroY-scale*i, i).attr({"stroke": colorBase, "font-size":12});
                createLine(paper, zeroX+2, zeroY-scale*i, zeroX+scale*10.5, zeroY-scale*i).attr({
                    "stroke": "#8FC7ED", "stroke-width": 1, "stroke-dasharray": "-."
                });
            }
            return paper
        }

    }
);
