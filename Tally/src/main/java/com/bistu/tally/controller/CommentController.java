package com.bistu.tally.controller;

import java.util.Objects;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bistu.tally.bean.ResultInfo;
import com.bistu.tally.helper.CommentBean;
import com.bistu.tally.helper.SocialBean;
import com.bistu.tally.service.CommentService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class CommentController {
	@Autowired
	private CommentService commentService;
	
	/**
	 * Url接受参数，通过commentService修改数据库，新建评论
	 * @param bean 评论信息，包括动态id，操作人id，时间，内容
	 * @return 操作成功返回code 0以及动态信息，不成功返回code 1
	 */
	@PostMapping({"/comments"})
	public ResultInfo createComment(@RequestBody CommentBean bean) {
		log.info("coming bean is: {}", bean);
		if(Objects.isNull(bean) || Objects.isNull(bean.getCommentContent()) ||
				Objects.isNull(bean.getTime()) || Objects.isNull(bean.getUserId())||
				Objects.isNull(bean.getSocialId())) {
			ResultInfo resultInfo = ResultInfo.failure();
            resultInfo.setMesg(String.format("Attribute missing,Request Score:%s",
                    ReflectionToStringBuilder.toString(bean, ToStringStyle.MULTI_LINE_STYLE)));
            return ResultInfo.failure();
		}
		SocialBean bean2 = commentService.create(bean);
		log.info("bean is: {}", bean2);
		ResultInfo resultInfo = ResultInfo.success();
		resultInfo.setData(bean2);
		return resultInfo;
	}
	
	/**
	 * Url接受参数，通过commentService修改数据库，删除评论
	 * @param cid 评论id
	 * @param uid 操作用户id
	 * @return 操作成功返回code 0，不成功返回code 1
	 */
	@DeleteMapping({"/comments/{cid}&{uid}"})
	public ResultInfo deleteComment(@PathVariable("cid") Long commentId, @PathVariable("uid") Long userId) {
		log.info("{} is ready to delete comment id:{}", userId, commentId);
        if (Objects.isNull(commentId) || Objects.isNull(userId)) {
            ResultInfo resultInfo = ResultInfo.failure();
            resultInfo.setMesg("CID or UID is missing");
            log.error("CID or UID is required,....");
            return resultInfo;
        }

        boolean result = commentService.delete(commentId, userId);
        if(!result) {
            ResultInfo resultInfo = ResultInfo.failure();
            resultInfo.setData("comment deleted fail");
            log.error("comment:{} deleted fail", commentId);
            return resultInfo;
        }
        else {
            ResultInfo resultInfo = ResultInfo.success();
            resultInfo.setMesg(commentId + " is deleted");
            log.info("social:{} is deleted....", commentId);
            return resultInfo;
        }
	}
}
