/**
    创建数据库 smallProgram
 */
DROP DATABASE IF EXISTS smallProgram;
CREATE DATABASE smallProgram;
USE smallProgram;

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

/**
  用户信息表(UserInfo)
*/
DROP TABLE IF EXISTS `UserInfo`;
CREATE TABLE `UserInfo` (
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `createBy` varchar(36) NOT NULL COMMENT '创建人的用户id',
  `updateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `updateBy` varchar(36) NOT NULL COMMENT '更新人的用户id',
  `id` varchar(36) NOT NULL  COMMENT '用户信息表id',
  `sId` varchar(64) NOT NULL  COMMENT '微信的唯一id',
  `name` varchar(32) NOT NULL  COMMENT '昵称',
  `headUrl` varchar(36) NOT NULL  COMMENT '用户头像url',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO UserInfo 
    (createBy, updateBy,id,sId,name,headUrl) 
  VALUES
    ('vincent','vincent','idididid','idididid','vincent','headUrl');

SELECT * FROM UserInfo;

/**
  地址信息表(AddressInfo)
*/
DROP TABLE IF EXISTS `AddressInfo`;
CREATE TABLE `AddressInfo` (
  `createTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `createBy` varchar(36) NOT NULL COMMENT '创建人的用户id',
  `updateTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `updateBy` varchar(36) NOT NULL COMMENT '更新人的用户id',
  `id` varchar(36) NOT NULL  COMMENT '地址信息表id',
  `parentId` varchar(36) NOT NULL  COMMENT '用户信息表的id',
  `name` varchar(32) NOT NULL  COMMENT '联系人名称',
  `telephpone` varchar(11) NOT NULL  COMMENT '手机号码',
  `area` varchar(200) NOT NULL  COMMENT '手机号码',
  `postcode` varchar(6) NOT NULL  COMMENT '邮编',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO AddressInfo
    (createBy,updateBy,id,parentId,name,telephpone,area,postcode)
  VALUES
    ('vincent','vincent','idididid','idididid','vincent','13111','广东省，深圳市，龙华新区，清湖地铁站','518000');

SELECT * FROM AddressInfo;

/**
  用户信息表(UserInfo)
*/
DROP TABLE IF EXISTS `UserInfo`;
CREATE TABLE `UserInfo` (
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `createBy` varchar(36) NOT NULL COMMENT '创建人的用户id',
  `updateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `updateBy` varchar(36) NOT NULL COMMENT '更新人的用户id',
  `id` varchar(36) NOT NULL  COMMENT '用户信息表id',
  `sId` varchar(64) NOT NULL  COMMENT '微信的唯一id',
  `name` varchar(32) NOT NULL  COMMENT '昵称',
  `headUrl` varchar(36) NOT NULL  COMMENT '用户头像url',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO UserInfo 
    (createBy, updateBy,id,sId,name,headUrl) 
  VALUES
    ('vincent','vincent','idididid','idididid','vincent','headUrl');

SELECT * FROM UserInfo;

/**
  抽奖表(DrawInfo)
*/
DROP TABLE IF EXISTS `DrawInfo`;
CREATE TABLE `DrawInfo` (
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `createBy` varchar(36) NOT NULL COMMENT '创建人的用户id',
  `updateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `updateBy` varchar(36) NOT NULL COMMENT '更新人的用户id',
  `id` varchar(36) NOT NULL  COMMENT '抽奖表id',
  `drawType` varchar(32) NOT NULL DEFAULT 1  COMMENT '开奖方式(1 定时开奖，2 满人开奖，3 手动开奖)',
  `drawTime` datetime NOT NULL  COMMENT '开奖时间（为定时开奖等时候必填）',
  `personNum` int NOT NULL  COMMENT '开奖人数（为满人开奖等时候必填）',
  `detail` varchar(500) COMMENT '抽奖说明',
  `author` varchar(32) NOT NULL  COMMENT '微信号、公众号等',
  `showInfo` varchar(32) NOT NULL  COMMENT '引导复制文案',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO DrawInfo
    (createBy,updateBy,id,drawTime,personNum,detail,author,showInfo)
  VALUES
    ('vincent','vincent','idididid', '2019-10-07 00:00:00', '10','asdf','vincent','复制文案');
SELECT * FROM DrawInfo;

/**
  奖品信息表(AwardInfo)
*/
DROP TABLE IF EXISTS `AwardInfo`;
CREATE TABLE `AwardInfo` (
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `createBy` varchar(36) NOT NULL COMMENT '创建人的用户id',
  `updateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `updateBy` varchar(36) NOT NULL COMMENT '更新人的用户id',
  `id` varchar(36) NOT NULL  COMMENT '奖品信息表id',
  `parentId` varchar(36) NOT NULL  COMMENT '抽奖表的id',
  `name` varchar(32) NOT NULL  COMMENT '奖品名称',
  `num` int NOT NULL  COMMENT '奖品数量',
  `type` varchar(1) NOT NULL DEFAULT 1  COMMENT '奖品类型(1 一等奖，2 二等奖，3 三等奖)',
  `imgUrl` varchar(32) NOT NULL  COMMENT '图片地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO AwardInfo
    (createBy,updateBy,id,parentId,name,num,type,imgUrl)
  VALUES
    ('vincent','vincent','idididid','parentId','奖品名称','11','2','asdf图片地址');
SELECT * FROM AwardInfo;

/**
  图片信息表(ImageInfo)
*/
DROP TABLE IF EXISTS `ImageInfo`;
CREATE TABLE `ImageInfo` (
  `createTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `createBy` varchar(36) NOT NULL COMMENT '创建人的用户id',
  `updateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `updateBy` varchar(36) NOT NULL COMMENT '更新人的用户id',
  `id` varchar(36) NOT NULL  COMMENT '图片信息表id',
  `img` blob NOT NULL  COMMENT '图片地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

INSERT INTO ImageInfo
    (createBy,updateBy,id,img)
  VALUES
    ('vincent','vincent','idididid','图片图片');
SELECT * FROM ImageInfo;


