/*
Navicat MySQL Data Transfer

Source Server         : gz2005
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : newbalance

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-09-14 20:40:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `src` varchar(255) DEFAULT NULL,
  `tit` varchar(255) DEFAULT NULL,
  `deatil` varchar(255) DEFAULT NULL,
  `pirce` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `goodsid` int(11) NOT NULL AUTO_INCREMENT,
  `sex` varchar(255) DEFAULT NULL,
  `new` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `sale` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodsid`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m577hjk_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '英国原产577系列男款复古休闲', 'Men\'s 英美产系', '1,499.00', 'M577HJK', '1', 'man', '0', '0', '234');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/mtl575hj_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '英国原产575系列男款复古休闲', 'Men\'s 英美产系', '1,499.00', 'MTL575HJ', '2', 'man', '0', '0', '45');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m992nt_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产990V5男款复古运动', 'Men\'s ???', '1,899.00', 'M992NT', '3', 'neutral\n\n', '1', '0', '23');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m992mc_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产1300系列男款复古休闲', 'Men\'s ???', '1,299.00', 'M992MC', '4', 'female', '1', '0', '56');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997soa_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产998系列男女同款复古休闲运动', 'Men\'s ???', '1,899.00', 'M997SOA', '5', 'female', '0', '0', '245');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997sob_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '990V5美国原产男款猪皮革复古运动鞋', 'Men\'s ???', '1,899.00', 'M997SOB', '6', 'female', '1', '0', '561');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m990gb5_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产990V5男款复古运动', 'Men\'s 英美产系', '1,899.00', 'M990GB5', '7', 'man', '0', '0', '23');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1300ap_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产1300系列男款复古休闲', 'Men\'s 英美产系', '1,699.00', 'M1300AP', '8', 'man', '0', '0', '65');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m998ene_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产998系列男女同款复古休闲运动', 'Men\'s 中性款', '1,899.00', 'M998ENE', '9', 'neutral\n\n', '0', '0', '64');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m990na5_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '990V5美国原产男款猪皮革复古运动鞋', 'Men\'s 英美产系', '1,899.00', 'M990NA5', '10', 'man', '0', '3', '74');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1500gwr_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '英国原产1500系列男女同款复古休闲运动', 'Men\'s 中性款', '1,499.00', 'M1500GWR', '11', 'neutral\n\n', '0', '8', '24');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m991gwr_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '英国原产991系列男款复古运动鞋鞋', 'Men\'s 英美产系', '1,699.00', 'M991GWR', '12', 'man', '0', '4', '667');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m670nng_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '英国原产670系列男款复古休闲', 'Men\'s 英美产系', '1,499.00', 'M670NNG', '13', 'man', '0', '3', '322');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m670gnw_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '英国原产670系列男女同款复古休闲', 'Men\'s 中性款', '1,499.00', 'M670GNW', '14', 'neutral\n\n', '0', '0', '125');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1300ae_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产1300系列男女同款复古休闲', 'Men\'s 中性款', '1,699.00', 'M1300AE', '15', 'neutral\n\n', '0', '0', '78');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1300ao_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产1300系列男女同款复古休闲', 'Men\'s 中性款', '1,699.00', 'M1300AO', '16', 'neutral\n\n', '0', '0', '65');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1500pgl_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '英国原产1500系列男女同款复古休闲运动', 'Men\'s 中性款', '1,499.00', 'M1500PGL', '17', 'neutral\n\n', '0', '0', '86');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m992bl_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产992系列男女同款复古休闲', 'Men\'s 中性款', '1,899.00', 'M992BL', '18', 'neutral\n\n', '0', '5', '23');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997smg_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产997S系列男款复古休闲', 'Men\'s 英美产系', '1,899.00', 'M997SMG', '19', 'man', '0', '2', '576');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997nal_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', 'New Balance x SuperFabric联名97系列男款复古休闲', 'Men\'s 英美产系', '1,899.00', 'M997NAL', '20', 'man', '0', '0', '45');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/mtrpbbr_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产FuelCell Echo Triple限量版男款跑步运动鞋', 'Men\'s Fuel系列', '1,699.00', 'MTRPBBR', '21', 'man', '0', '0', '3');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m998_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产998系列男款复古休闲', '男鞋 英美产系', '1,899.00', 'M998', '22', 'man', '1', '0', '4');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1500uct_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '英国原产1500系列男女同款复古休闲运动', 'Men\'s 中性款', '1,499.00', 'M1500UCT', '23', 'neutral\n\n', '1', '0', '5');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m998awg_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产998系列男款复古休闲', 'Men\'s 英美产系', '1,899.00', 'M998AWG', '24', 'man', '1', '3', '67');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997paf_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产997系列高级牛皮革男女同款复古休闲鞋', 'Men\'s 女款', '2,499.00', 'M997PAF', '25', 'female', '1', '0', '765');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m996_nb_14_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产996男女同款复古休闲', 'Men\'s 女款', '1,699.00', 'M996', '26', 'female', '1', '0', '45');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997gy_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产997系列男女同款复古休闲', 'Men\'s 女款', '1,899.00', 'M997GY', '27', 'female', '0', '0', '123');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m1500fds_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '英国原产1500系列男女同款复古休闲运动', 'Men\'s 女款', '1,499.00', 'M1500FDS', '28', 'female', '0', '0', '34');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997lbd_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产997男女同款复古休闲运动', 'Men\'s 女款', '1,899.00', 'M997LBD', '29', 'female', '0', '0', '546');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m990n2_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '990V2美国原产男女同款复古休闲', 'Unisex 中性款', '1,999.00', 'M990N2', '30', 'neutral\n\n', '0', '4', '23');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/u3dsptbk_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产990 Sport 3D限量款男女同款休闲运动鞋', 'Unisex 中性款', '2,499.00', 'U3DSPTBK', '31', 'neutral\n\n', '0', '0', '341');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m997bk_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产997男女同款复古休闲运动', 'Men\'s 中性款', '1,899.00', 'M997BK', '32', 'neutral\n\n', '0', '0', '242');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m998psd_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产998男女同款复古休闲运动', 'Men\'s 中性款', '1,899.00', 'M998PSD', '33', 'neutral\n\n', '0', '6', '234');
INSERT INTO `goods` VALUES ('https://nb.scene7.com/is/image/NB/m992tn_nb_02_i?$pdpflexf2$&wid=220&hei=220&qlt=85&resMode=bisharp', '美国原产992系列男女同款复古休闲', 'Men\'s 女款', '1,899.00', 'M992TN', '34', 'female', '0', '0', '1124');
INSERT INTO `goods` VALUES (null, null, null, null, null, '35', null, null, null, null);
SET FOREIGN_KEY_CHECKS=1;
