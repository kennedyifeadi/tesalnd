import { HiCreditCard, HiLibrary } from 'react-icons/hi'
import { PAYMENT_INFO } from '../utils/constants'

export function PaymentDetails() {
  return (
    <div className="bg-amber-50 border border-amber-100 rounded-3xl p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <HiCreditCard className="text-2xl text-amber-600" />
        <h3 className="font-heading text-xl font-bold text-slate-900">Payment Instructions</h3>
      </div>
      
      <p className="text-sm text-slate-600 mb-8 leading-relaxed">
        Please make a payment of <span className="font-bold text-slate-900">₦{PAYMENT_INFO.amountNgn.toLocaleString()}</span> to the account details below before completing your application.
      </p>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-amber-100/50 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Account Name</span>
          <span className="text-sm font-bold text-slate-900">{PAYMENT_INFO.accountName}</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-amber-100/50 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Account Number</span>
          <span className="text-sm font-bold text-slate-900 tracking-widest">{PAYMENT_INFO.accountNumber}</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-amber-100/50 shadow-sm">
          <div className="flex items-center gap-2">
            <HiLibrary className="text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Bank Name</span>
          </div>
          <span className="text-sm font-bold text-slate-900">{PAYMENT_INFO.bankName}</span>
        </div>
      </div>
    </div>
  )
}
