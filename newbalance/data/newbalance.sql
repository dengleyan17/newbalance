/*
Navicat MySQL Data Transfer

Source Server         : gz2005
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : newbalance

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-09-18 16:16:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `goods_id` int(11) DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `goods_num` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of car
-- ----------------------------

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `src` varchar(255) DEFAULT NULL,
  `tit` varchar(255) DEFAULT NULL,
  `deatil` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `goodsid` int(11) NOT NULL AUTO_INCREMENT,
  `sex` varchar(255) DEFAULT NULL,
  `new` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `sale` varchar(255) DEFAULT NULL,
  `is_select` int(255) DEFAULT NULL,
  PRIMARY KEY (`goodsid`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m577hjk_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????577????????', 'Men\'s ????', '1,499.00', 'M577HJK', '1', 'man', '0', '0', '234', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/mtl575hj_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????575????????', 'Men\'s ????', '1,499.00', 'MTL575HJ', '2', 'man', '0', '0', '45', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m992nt_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????990V5??????', 'Female\'s ???', '1,899.00', 'M992NT', '3', 'neutral', '1', '0', '23', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m992mc_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????V1300????????', 'Female\'s ???', '1,299.00', 'M992MC', '4', 'female', '1', '0', '56', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997soa_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????V998????????????', 'Female\'s ???', '1,899.00', 'M997SOA', '5', 'female', '0', '0', '245', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997sob_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '990V5??????????????', 'Female\'s ???', '1,899.00', 'M997SOB', '6', 'female', '1', '0', '561', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m990gb5_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????990V5??????', 'Men\'s ????', '1,899.00', 'M990GB5', '7', 'man', '0', '0', '23', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1300ap_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????1300????????', 'Men\'s ????', '1,699.00', 'M1300AP', '8', 'man', '0', '0', '65', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m998ene_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????998????????????', 'Men\'s ???', '1,899.00', 'M998ENE', '9', 'neutral', '0', '0', '64', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m990na5_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '990V5??????????????', 'Men\'s ????', '1,899.00', 'M990NA5', '10', 'man', '0', '3', '74', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1500gwr_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????1500????????????', 'Men\'s ???', '1,499.00', 'M1500GWR', '11', 'neutral', '0', '8', '24', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m991gwr_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????991??????????', 'Men\'s ????', '1,699.00', 'M991GWR', '12', 'man', '0', '4', '667', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m670nng_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????670????????', 'Men\'s ????', '1,499.00', 'M670NNG', '13', 'man', '0', '3', '322', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m670gnw_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????670??????????', 'Men\'s ???', '1,499.00', 'M670GNW', '14', 'neutral', '0', '0', '125', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1300ae_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????1300??????????', 'Men\'s ???', '1,699.00', 'M1300AE', '15', 'neutral', '0', '0', '78', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1300ao_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????1300??????????', 'Men\'s ???', '1,699.00', 'M1300AO', '16', 'neutral', '0', '0', '65', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1500pgl_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????1500????????????', 'Men\'s ???', '1,499.00', 'M1500PGL', '17', 'neutral', '0', '0', '86', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m992bl_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????992??????????', 'Men\'s ???', '1,899.00', 'M992BL', '18', 'neutral', '0', '5', '23', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997smg_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????997S????????', 'Men\'s ????', '1,899.00', 'M997SMG', '19', 'man', '0', '2', '576', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997nal_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', 'New Balance x SuperFabric??97????????', 'Men\'s ????', '1,899.00', 'M997NAL', '20', 'man', '0', '0', '45', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/mtrpbbr_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????FuelCell Echo Triple??????????', 'Men\'s Fuel??', '1,699.00', 'MTRPBBR', '21', 'man', '0', '0', '3', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m998_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????998????????', '?? ????', '1,899.00', 'M998', '22', 'man', '1', '0', '4', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1500uct_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????1500????????????', 'Men\'s ???', '1,499.00', 'M1500UCT', '23', 'neutral', '1', '0', '5', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m998awg_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????998????????', 'Men\'s ????', '1,899.00', 'M998AWG', '24', 'man', '1', '3', '67', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997paf_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????997????????????????', 'Men\'s ??', '2,499.00', 'M997PAF', '25', 'female', '1', '0', '765', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m996_nb_14_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????996????????', 'Men\'s ??', '1,699.00', 'M996', '26', 'female', '1', '0', '45', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997gy_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????997??????????', 'Men\'s ??', '1,899.00', 'M997GY', '27', 'female', '0', '0', '123', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1500fds_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????1500????????????', 'Men\'s ??', '1,499.00', 'M1500FDS', '28', 'female', '0', '0', '34', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997lbd_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????997??????????', 'Men\'s ??', '1,899.00', 'M997LBD', '29', 'female', '0', '0', '546', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m990n2_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '990V2????????????', 'Unisex ???', '1,999.00', 'M990N2', '30', 'neutral\n\n', '0', '4', '23', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/u3dsptbk_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????990 Sport 3D????????????', 'Unisex ???', '2,499.00', 'U3DSPTBK', '31', 'neutral\n\n', '0', '0', '341', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997bk_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????997??????????', 'Men\'s ???', '1,899.00', 'M997BK', '32', 'neutral\n\n', '0', '0', '242', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m998psd_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????998??????????', 'Men\'s ???', '1,899.00', 'M998PSD', '33', 'neutral\n\n', '0', '6', '234', '0');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m992tn_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '????992??????????', 'Men\'s ??', '1,899.00', 'M992TN', '34', 'female', '0', '0', '1124', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'dengleyan', '12345@163.com', '123456');
INSERT INTO `user` VALUES ('2', 'jay', 'jay@email.com', '123456');
INSERT INTO `user` VALUES ('3', 'jay1234', '123@123.com', '12345678');
INSERT INTO `user` VALUES ('4', 'jay12345', '1233@123.com', '12345678');
INSERT INTO `user` VALUES ('5', 'jay123456', '12331@123.com', '12345678');
INSERT INTO `user` VALUES ('6', 'jay123412', '112123@123.com', '12345678');
INSERT INTO `user` VALUES ('7', 'dengle', '1223@123.com', '12345678');
SET FOREIGN_KEY_CHECKS=1;
