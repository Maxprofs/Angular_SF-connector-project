//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SalesforceCon.DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class ResponseLog
    {
        public int ResponseId { get; set; }
        public string OrderId { get; set; }
        public string SFCustomerResponse { get; set; }
        public string SFOrderResponse { get; set; }
        public Nullable<long> CustomerId { get; set; }
        public string StatusCode { get; set; }
        public string Message { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
    }
}
