package com.bistu.tally.dao.repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.bistu.tally.dao.entity.Bill;

public interface BillRepository extends JpaRepository<Bill, Long> {
	/**
	 * 通过账单id，修改账单金额
	 * 
	 * @param amount
	 * @param id
	 * @return
	 */
	@Modifying
	@Query("update Bill bill set bill.category=?1,bill.classify=?2,bill.amount=?3,bill.remarks=?4 where bill.id=?5")
	public int updateBill(int category, String classify, float amount, String remakrs, Long id);

	@Modifying
	@Query(nativeQuery = true, value = "UPDATE t_bill SET time = ?1 WHERE id=?2")
	public int updateBillFromTime(String time, Long id);

	/**
	 * 通过账单id，进入t_bill表删除账单
	 * 
	 * @param id
	 * @return
	 */
	@Modifying
	@Query(nativeQuery = true, value = "delete from t_bill where id=?1")
	public int deleteBill(Long id);

	ArrayList<Bill> findByUserId(Long userid);

	@Query("select b from Bill b where b.id=?1")
	ArrayList<Bill> findByBillId(Long id);

	ArrayList<Bill> findByUserIdAndCategory(Long userid, int category);

	@Query(nativeQuery = true, value = "select * from t_bill where user_id=?1 and bill_category=?2 and month(time)=?3")
	ArrayList<Bill> findByUserIdAndCategoryAndMonth(Long userid, int category, int month);

	@Query(nativeQuery = true, value = "select * from t_bill where user_id=?1 and bill_category=?2 and day(time)=?3")
	ArrayList<Bill> findByUserIdAndCategoryAndDay(Long userid, int category, int day);

	@Query(nativeQuery = true, value = "select * from t_bill where user_id=?1 and bill_category=?2 and year(time)=?3")
	ArrayList<Bill> findByUserIdAndCategoryAndYear(Long userid, int category, int year);

	@Query(nativeQuery = true, value = "select * from t_bill where user_id=?1 and bill_classify=?2 and bill_category=?4 and month(time)=?3")
	ArrayList<Bill> findByUserIdAndClassifyAndMonthAndCategoty(Long userid, String classiyf, int month, int category);

	@Query(nativeQuery = true, value = "select * from t_bill where user_id=?1 and bill_classify=?2 and bill_category=?4 and year(time)=?3")
	ArrayList<Bill> findByUserIdAndClassifyAndYearAndCategoty(Long userid, String classiyf, int month, int category);

	@Query(nativeQuery = true, value = "select * from t_bill where user_id=?1 and bill_classify=?2 and bill_category=?4 and day(time)=?3")
	ArrayList<Bill> findByUserIdAndClassifyAndDayAndCategoty(Long userid, String classiyf, int month, int category);

	@Query(nativeQuery = true, value = "select * from t_bill where user_id=?1 and bill_category=?2 and year(time)=?3 and month(time)=?4 and day(time)=?5")
	ArrayList<Bill> findCategoryFromDay(Long userid, int category, int year, int month, int day);

	@Query(nativeQuery = true, value = "select * from t_bill where user_id=?1 and bill_category=?2 and year(time)=?3 and month(time)=?4 ")
	ArrayList<Bill> findCategoryFromMonth(Long userid, int category, int year, int month);

	@Query(nativeQuery = true, value = "select * from t_bill where user_id=?1 and bill_category=?2 and year(time)=?3")
	ArrayList<Bill> findCategoryFromYear(Long userid, int category, int year);

}
