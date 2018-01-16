﻿// 
// BaseView.cs
// 
// Author:
//     Jim Borden  <jim.borden@couchbase.com>
// 
// Copyright (c) 2017 Couchbase, Inc All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
using System;
using MvvmCross.WindowsUWP.Views;

namespace Training
{
    /// <summary>
    /// A base class for other views (cannot be abstract because this prevents its
    /// use inside of XAML)
    /// </summary>
    public class BasePage : MvxWindowsPage, IDisposable
    {
        #region Protected Methods

        /// <summary>
        /// Virtual disposal logic
        /// </summary>
        /// <param name="finalizing">Whether or not this is the finalizer (always false unless
        /// a subclass call it from a finalizer)</param>
        protected virtual void Dispose(bool finalizing)
        {
            (DataContext as IDisposable)?.Dispose();
        }

        #endregion

        #region IDisposable

        public void Dispose()
        {
            Dispose(false);
        }

        #endregion
    }
}