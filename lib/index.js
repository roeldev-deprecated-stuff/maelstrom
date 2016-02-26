/**
 * maelstrom | lib/index.js
 *
 * maelstrom - A collection of gulp tasks
 * Copyright (c) 2015-2016 Roel Schut (roelschut.nl)

 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
'use strict';

const Maelstrom = require('./Maelstrom');

Maelstrom.prototype.utils = require('./utils');

// add the Plugin class to the Maelstrom prototype chain after the Maelstrom
// class is fully required. this way we can require the Maelstrom class
// inside the Plugin class without weird tricks
Maelstrom.prototype.Plugin = require('./Plugin');

// export the created maelstrom instance. this will be the public API
module.exports = Maelstrom.instance();
