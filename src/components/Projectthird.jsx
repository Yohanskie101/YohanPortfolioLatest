import React from "react";
import ThirdProjectImg from "../assets/pj1-img.png";
import lng1 from "../assets/vbnet.png";
import lng7 from "../assets/microsoftaccess.png";

function Projectthird() {
  return (
    <>
      <div className="heading-project text-base xl:text-4xl lg:text-3xl sm:text-2xl leading-relaxed">
        Pic-A-Book
      </div>

      <div className="flex justify-between mb-5">
        <div className="sub-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl lg:text-2xl  ">
          Library Management System
        </div>
        <div className="read-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
          Read the full details
        </div>
      </div>

      <div className="Project-img-cont w-full mb-5 h-1/2">
        <img
          className="w-full h-full"
          src={ThirdProjectImg}
          onClick={() => document.getElementById("my_modal_3").showModal()}
        />
      </div>

      <div className="relative">
        <div className="flex justify-around ">
          <div className="sub-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
            Role
          </div>
          <div className="sub-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
            Years
          </div>
        </div>

        <div className="flex justify-around">
          <div className="read-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
            Lead Programmer
          </div>
          <div className="read-heading-project text-xs sm:text-lg md:text-xl 2xl:text-2xl ">
            2022-2022
          </div>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl ">Pic-A-Book</h3>
          <div className="img-cont-modal py-4 ">
            <img className="img-modal w-full h-full" src={ThirdProjectImg} />
          </div>

          <p className="py-4">
            Pic-A-Book, developed using VB.net and Microsoft Access, streamlines
            all library operations for school libraries. It features
            user-friendly interfaces for managing books, tracking borrow and
            return transactions, and calculating overdue penalties
            automatically. The system ensures secure data storage and generates
            detailed reports for efficient library management.
          </p>
          <div className="py-2 flex gap-3">
            <img className="w-6 h-6" src={lng1} />
            <img className="w-7 h-6" src={lng7} />
          </div>
          <p className="py-1 font-bold text-lg">Features:</p>
          <p className="py-2">
            1. Book Management: Add, retrieve, update, and delete book records.
            <br></br>
            2. Borrower Records: Maintain and view data on all borrowers.{" "}
            <br></br> 3. Transaction Tracking: Monitor book borrowing, returns,
            and overdue fee payments. <br></br>4. User Management: Add,
            retrieve, update, and delete user records. <br></br> 5.
            Comprehensive Book List: Store and manage the book list and total
            number of books. <br></br>6. Automated Penalty Calculation:
            Calculate and track penalties for late returns. <br></br>7. Login
            System: Authenticate users with roles as administrators (librarians)
            and borrowers.
          </p>
          <div className="container-btn-footer py-4">
            <button className="btn-modal-footer btn btn-outline">
              Live Preview
            </button>
            <button className="btn-modal-footer  btn btn-outline">
              Source Files
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Projectthird;
