import React from "react";
import { ThumbsUp, ThumbsDown, AlertCircle } from "lucide-react";

const ReportCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Heavy Traffic at Koteshwor</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-500">Reported by John Doe • 5 minutes ago</span>
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              Congestion
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">📍 Koteshwor Intersection</p>
        </div>

        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-yellow-50 text-yellow-600">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Pending Verification</span>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Multiple vehicles stuck due to power cut at traffic signals. Expect 30+ minutes delay.
      </p>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
          <ThumbsUp className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">45</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
          <ThumbsDown className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">5</span>
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
